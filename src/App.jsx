import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CalendarView from './components/CalendarView';
import DayRecipePage from './components/DayRecipePage';
import GroceryListModal from './components/GroceryListModal';
import RecipeSearch from './components/RecipeSearch';
import { recipesData } from './data/recipesData';

export default function App() {
  const [currentDate, setCurrentDate] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1, 12, 0, 0);
  });
  const [selectedDayNumber, setSelectedDayNumber] = useState(null);
  const [isGroceryOpen, setIsGroceryOpen] = useState(false);
  const [groceryInitialDay, setGroceryInitialDay] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Persistent State for completed meals and favorites
  const [completedMeals, setCompletedMeals] = useState(() => {
    try {
      const saved = localStorage.getItem('hfn_completed_meals');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('hfn_favorites');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('hfn_completed_meals', JSON.stringify(completedMeals));
    } catch (e) {}
  }, [completedMeals]);

  useEffect(() => {
    try {
      localStorage.setItem('hfn_favorites', JSON.stringify(favorites));
    } catch (e) {}
  }, [favorites]);

  const handleToggleComplete = (mealId) => {
    setCompletedMeals(prev => ({
      ...prev,
      [mealId]: !prev[mealId]
    }));
  };

  const handleToggleFavorite = (mealId) => {
    setFavorites(prev => ({
      ...prev,
      [mealId]: !prev[mealId]
    }));
  };

  const handlePrevMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1, 12, 0, 0));
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1, 12, 0, 0));
  };

  const handleSelectDay = (dayNum) => {
    setSelectedDayNumber(dayNum);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    try {
      window.history.pushState({ day: dayNum }, '', `#day-${dayNum}`);
    } catch (e) {}
  };

  const handleBackToCalendar = () => {
    setSelectedDayNumber(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    try {
      if (window.location.hash) {
        window.history.pushState('', document.title, window.location.pathname + window.location.search);
      }
    } catch (e) {}
  };

  const handleOpenGrocery = (dayNum = null) => {
    setGroceryInitialDay(dayNum);
    setIsGroceryOpen(true);
  };

  const handleSelectSearchResult = (dayNum, mealType) => {
    handleSelectDay(dayNum);
  };

  useEffect(() => {
    const handlePopState = (e) => {
      if (e.state && e.state.day) {
        setSelectedDayNumber(e.state.day);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setSelectedDayNumber(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);


  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Bar */}
      <Navbar
        currentDate={currentDate}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
        onOpenGrocery={() => handleOpenGrocery(null)}
        onToggleSearch={() => setIsSearchOpen(!isSearchOpen)}
        isSearchOpen={isSearchOpen}
      />

      {/* Recipe Search Panel */}
      <RecipeSearch
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        recipesData={recipesData}
        onSelectResult={handleSelectSearchResult}
      />

      {/* Main Content Area: Switch between Calendar Grid and Dedicated Recipe Page */}
      <main style={{ flex: 1 }}>
        {selectedDayNumber ? (
          <DayRecipePage
            dayNumber={selectedDayNumber}
            dayPlan={recipesData[selectedDayNumber - 1]}
            onBack={handleBackToCalendar}
            completedMeals={completedMeals}
            onToggleComplete={handleToggleComplete}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onOpenGroceryForDay={(dayNum) => {
              handleBackToCalendar();
              handleOpenGrocery(dayNum);
            }}
          />
        ) : (
          <div className="calendar-centered-container">

            {/* Main Calendar View */}
            <CalendarView
              currentDate={currentDate}
              recipesData={recipesData}
              onSelectDay={handleSelectDay}
              completedMeals={completedMeals}
              favorites={favorites}
            />
          </div>
        )}
      </main>

      <GroceryListModal
        isOpen={isGroceryOpen}
        onClose={() => {
          setIsGroceryOpen(false);
          setGroceryInitialDay(null);
        }}
        recipesData={recipesData}
        initialDay={groceryInitialDay}
      />
    </div>
  );
}
