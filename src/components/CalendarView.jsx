import React from 'react';
import { Sun, Moon, Utensils, CheckCircle2, Heart, Sparkles } from 'lucide-react';

export default function CalendarView({ 
  currentDate, 
  recipesData, 
  onSelectDay, 
  completedMeals = {}, 
  favorites = {} 
}) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Get real today for highlighting
  const today = new Date();
  const isCurrentMonthYear = today.getFullYear() === year && today.getMonth() === month;
  const todayDateNumber = today.getDate();

  // Calculate days in month and starting weekday safely at noon (12:00:00) to avoid midnight timezone boundary shifts
  const firstDayOfMonth = new Date(year, month, 1, 12, 0, 0);
  const firstDayOfWeek = firstDayOfMonth.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
  const daysInMonth = new Date(year, month + 1, 0, 12, 0, 0).getDate();

  // Weekday headers
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Generate empty cells before the 1st of the month
  const blanks = Array.from({ length: firstDayOfWeek }, (_, i) => i);

  // Generate day cells (1 to daysInMonth)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="animate-fade-in" style={{ marginBottom: '30px' }}>
      {/* Single grid keeps weekday headers aligned with day columns */}
      <div className="grid-calendar">
        {weekDays.map((wd, index) => (
          <div
            key={`header-${index}`}
            className="calendar-weekday-header desktop-only-grid"
            data-weekend={index === 0 || index === 6 ? 'true' : 'false'}
          >
            {wd}
          </div>
        ))}

        {/* Blank preceding slots */}
        {blanks.map(blank => (
          <div key={`blank-${blank}`} className="calendar-blank-slot desktop-only-blank" />
        ))}

        {/* Day Cards - Compact without recipe text strings */}
        {days.map(dayNum => {
          const dayPlan = recipesData[dayNum - 1] || recipesData[0];
          const isToday = isCurrentMonthYear && dayNum === todayDateNumber;
          const weekdayIndex = (firstDayOfWeek + dayNum - 1) % 7;
          const weekdayName = weekDays[weekdayIndex];

          // Check completion and favorite counts for this day
          const bId = dayPlan?.breakfast?.id;
          const lId = dayPlan?.lunch?.id;
          const dId = dayPlan?.dinner?.id;
          const completedCount = (completedMeals[bId] ? 1 : 0) + (completedMeals[lId] ? 1 : 0) + (completedMeals[dId] ? 1 : 0);
          const hasFav = favorites[bId] || favorites[lId] || favorites[dId];

          return (
            <div
              key={`day-${dayNum}`}
              onClick={() => onSelectDay(dayNum)}
              className={`glass-panel glass-panel-hover day-card ${isToday ? 'current-day-pulse day-card-today' : ''}`}
            >
              {/* Top Row: Day Number and Badges */}
              <div className="day-card-header">
                <div className="day-card-date-group">
                  <span className={`day-card-number ${isToday ? 'day-card-number-today' : ''}`}>
                    {dayNum}
                  </span>
                  <span className="mobile-weekday-badge badge badge-purple">
                    {weekdayName}
                  </span>
                  {isToday && (
                    <span className="badge badge-teal day-card-today-badge">
                      <Sparkles size={10} /> TODAY
                    </span>
                  )}
                </div>

                {/* Status indicators */}
                <div className="day-card-status">
                  {hasFav && (
                    <Heart size={14} color="#ff4b72" fill="#ff4b72" title="Contains favorite recipes" />
                  )}
                  {completedCount > 0 && (
                    <span className="badge badge-purple day-card-complete-badge">
                      <CheckCircle2 size={10} /> {completedCount}/3
                    </span>
                  )}
                </div>
              </div>

              {/* Footer: meal icons + view link stacked to avoid overflow in narrow columns */}
              <div className="day-card-footer">
                <div className="day-card-meals">
                  <div className="day-card-meal-icons" title="Breakfast, Lunch, Dinner">
                    <Sun size={12} color="#FFD700" />
                    <Utensils size={12} color="var(--accent-teal)" />
                    <Moon size={12} color="var(--accent-purple)" />
                  </div>
                  <span className="day-card-meal-count">3 Meals</span>
                </div>
                <span className="day-card-cta">View Menu →</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
