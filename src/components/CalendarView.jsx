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
      {/* Weekday Header Grid */}
      <div className="grid-calendar" style={{ marginBottom: '10px' }}>
        {weekDays.map((wd, index) => (
          <div 
            key={index} 
            style={{ 
              textAlign: 'center', 
              padding: '8px', 
              fontWeight: 700, 
              color: index === 0 || index === 6 ? 'var(--accent-purple)' : 'var(--text-secondary)',
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
          >
            {wd}
          </div>
        ))}
      </div>

      {/* Main Calendar Grid - Compact View */}
      <div className="grid-calendar" style={{ gap: '10px' }}>
        {/* Blank preceding slots */}
        {blanks.map(blank => (
          <div 
            key={`blank-${blank}`} 
            style={{ 
              background: 'rgba(20, 20, 20, 0.25)', 
              borderRadius: '10px',
              minHeight: '85px',
              border: '1px dashed rgba(255, 255, 255, 0.03)'
            }} 
            className="desktop-only-blank"
          />
        ))}

        {/* Day Cards - Compact without recipe text strings */}
        {days.map(dayNum => {
          const dayPlan = recipesData[dayNum - 1] || recipesData[0];
          const isToday = isCurrentMonthYear && dayNum === todayDateNumber;

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
              className={`glass-panel glass-panel-hover ${isToday ? 'current-day-pulse' : ''}`}
              style={{
                padding: '12px 14px',
                minHeight: '85px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                position: 'relative',
                borderRadius: '12px',
                border: isToday ? '2px solid var(--accent-teal)' : '1px solid rgba(255, 255, 255, 0.08)',
                background: isToday ? 'rgba(3, 218, 198, 0.1)' : 'var(--bg-card)',
                transition: 'all 0.2s ease'
              }}
            >
              {/* Top Row: Day Number and Badges */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ 
                    fontSize: '1.3rem', 
                    fontWeight: 800,
                    color: isToday ? 'var(--accent-teal)' : '#fff',
                    background: isToday ? 'rgba(3, 218, 198, 0.2)' : 'rgba(255, 255, 255, 0.06)',
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {dayNum}
                  </span>
                  {isToday && (
                    <span className="badge badge-teal" style={{ fontSize: '0.6rem', padding: '2px 6px', letterSpacing: '0.5px' }}>
                      <Sparkles size={10} /> TODAY
                    </span>
                  )}
                </div>

                {/* Status indicators */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {hasFav && (
                    <Heart size={14} color="#ff4b72" fill="#ff4b72" title="Contains favorite recipes" />
                  )}
                  {completedCount > 0 && (
                    <span className="badge badge-purple" style={{ fontSize: '0.65rem', padding: '2px 6px' }}>
                      <CheckCircle2 size={10} /> {completedCount}/3
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Row: 3 Tabs / Meals Indicator */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                marginTop: '10px',
                paddingTop: '8px',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                fontSize: '0.75rem',
                color: 'var(--text-secondary)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '3px', background: 'rgba(0,0,0,0.3)', padding: '3px 6px', borderRadius: '12px' }}>
                    <Sun size={12} color="#FFD700" title="Breakfast" />
                    <Utensils size={12} color="var(--accent-teal)" title="Lunch" />
                    <Moon size={12} color="var(--accent-purple)" title="Dinner" />
                  </div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 500, color: 'var(--text-muted)' }}>3 Meals</span>
                </div>

                <span style={{ fontSize: '0.7rem', color: 'var(--accent-teal)', fontWeight: 600 }}>
                  View Menu →
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
