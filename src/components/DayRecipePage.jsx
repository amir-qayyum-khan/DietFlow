import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, Sun, Utensils, Moon, CheckCircle2, Heart, Clock, 
  Users, Sparkles, AlertCircle, ShoppingBag, ChefHat, Check 
} from 'lucide-react';
import FamilyHealthWarnings, { HEALTH_WARNINGS_ENABLED } from './FamilyHealthWarnings';

export default function DayRecipePage({
  dayNumber,
  dayPlan,
  onBack,
  completedMeals = {},
  onToggleComplete,
  favorites = {},
  onToggleFavorite,
  onOpenGroceryForDay
}) {
  const [activeTab, setActiveTab] = useState('breakfast'); // 'breakfast' | 'lunch' | 'dinner'

  // Scroll to top when page opens or tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [dayNumber]);

  if (!dayPlan) return null;

  const currentMeal = dayPlan[activeTab];
  const isCompleted = !!completedMeals[currentMeal.id];
  const isFavorite = !!favorites[currentMeal.id];

  const getTabIcon = (tab) => {
    switch(tab) {
      case 'breakfast': return <Sun size={20} color="#FFD700" />;
      case 'lunch': return <Utensils size={20} color="var(--accent-teal)" />;
      case 'dinner': return <Moon size={20} color="var(--accent-purple)" />;
      default: return null;
    }
  };

  /** Returns true when a meal has at least one non-empty health warning. */
  const hasWarnings = (meal) => {
    if (!meal) return false;
    const hw = meal.healthWarnings || {};
    return Object.values(hw).some((v) => v && v.trim());
  };

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '60px' }}>
      {/* Top Bar with Prominent Back Button */}
      <div className="day-recipe-topbar" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginBottom: '24px',
        flexWrap: 'wrap',
        gap: '16px',
        background: 'var(--bg-card)',
        padding: '16px 24px',
        borderRadius: 'var(--radius-md)',
        border: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <button 
          onClick={onBack}
          className="btn-secondary"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 18px',
            fontSize: '0.95rem',
            fontWeight: 600,
            background: 'rgba(187, 134, 252, 0.15)',
            borderColor: 'var(--accent-purple)',
            color: '#fff',
            cursor: 'pointer'
          }}
        >
          <ArrowLeft size={18} color="var(--accent-purple)" />
          <span>Back to Calendar</span>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span className="badge badge-purple" style={{ fontSize: '0.85rem', padding: '6px 12px' }}>
            <Sparkles size={14} /> Day {dayNumber} Full Menu
          </span>
          <button 
            onClick={() => onOpenGroceryForDay(dayNumber)}
            className="btn-teal"
            style={{ padding: '8px 14px', fontSize: '0.85rem' }}
          >
            <ShoppingBag size={16} />
            <span>Day {dayNumber} Groceries</span>
          </button>
        </div>
      </div>

      {/* Main Page Content Container */}
      <div className="glass-panel recipe-page-panel">
        {/* Header Section */}
        <div style={{ marginBottom: '24px' }}>
          <h1 className="text-gradient" style={{ fontSize: '2.2rem', fontWeight: 800, margin: 0 }}>
            DietFlow · Day {dayNumber}
          </h1>
        </div>

        {/* Seasonal Tip Banner */}
        {dayPlan.seasonalTip && (
          <div style={{ 
            background: 'rgba(3, 218, 198, 0.1)', 
            borderLeft: '4px solid var(--accent-teal)', 
            padding: '16px 20px', 
            borderRadius: 'var(--radius-sm)',
            marginBottom: '28px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            fontSize: '0.95rem',
            color: 'var(--text-primary)'
          }}>
            <AlertCircle size={24} color="var(--accent-teal)" style={{ flexShrink: 0 }} />
            <div>
              <strong style={{ color: 'var(--accent-teal)', display: 'block', marginBottom: '2px' }}>Seasonal Tip: </strong>
              {dayPlan.seasonalTip}
            </div>
          </div>
        )}

        {/* 3 Prominent Meal Navigation Tabs */}
        <div className="meal-nav-tabs-grid">
          {['breakfast', 'lunch', 'dinner'].map((tab) => {
            const meal = dayPlan[tab];
            const tabCompleted = !!completedMeals[meal.id];
            const tabFav = !!favorites[meal.id];
            const isActive = activeTab === tab;
            
            const formatTime = (t) => t ? t.replace(/mins?/gi, 'm').trim() : '';

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="meal-tab-btn"
                style={{
                  background: isActive ? 'linear-gradient(135deg, rgba(187, 134, 252, 0.25) 0%, rgba(3, 218, 198, 0.2) 100%)' : 'transparent',
                  border: isActive ? '2px solid var(--accent-purple)' : '2px solid transparent',
                  color: isActive ? '#fff' : 'var(--text-secondary)',
                  fontWeight: isActive ? 700 : 500
                }}
              >
                <div className="meal-tab-title">
                  {getTabIcon(tab)}
                  <span style={{ textTransform: 'capitalize' }}>{tab}</span>
                  {HEALTH_WARNINGS_ENABLED && hasWarnings(meal) && (
                    <span title="Health safety alerts for this meal" style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: '#F59E0B',
                      borderRadius: '50%',
                      width: '16px',
                      height: '16px',
                      fontSize: '10px',
                      fontWeight: 800,
                      color: '#000',
                      flexShrink: 0,
                      lineHeight: 1,
                    }}>!</span>
                  )}
                </div>
                <div className="meal-tab-meta">
                  <span style={{ color: 'var(--text-muted)' }}>{formatTime(meal.prepTime)} + {formatTime(meal.cookTime)}</span>
                  {tabFav && <Heart size={14} color="#ff4b72" fill="#ff4b72" title="Favorited" />}
                  {tabCompleted && <CheckCircle2 size={14} color="var(--accent-teal)" title="Cooked" />}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Meal Details Section */}
        <div className="animate-fade-in recipe-active-card">
          {/* Meal Title & Action Buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
            <div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                <span className="badge badge-teal" style={{ fontSize: '0.85rem' }}>{currentMeal.cuisine} Cuisine</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Users size={16} color="var(--accent-purple)" /> 5 People Serving
                </span>
                {currentMeal.calories && (
                  <span style={{ fontSize: '0.85rem', color: '#FFD700', background: 'rgba(255,215,0,0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                    ⚡ {currentMeal.calories}
                  </span>
                )}
              </div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', margin: 0 }}>
                {currentMeal.title}
              </h2>
            </div>

            {/* Quick action buttons */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button
                onClick={() => onToggleFavorite(currentMeal.id)}
                className="btn-secondary"
                style={{
                  padding: '10px 16px',
                  fontSize: '0.95rem',
                  background: isFavorite ? 'rgba(255, 75, 114, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                  borderColor: isFavorite ? '#ff4b72' : 'var(--border-color)',
                  color: isFavorite ? '#ff4b72' : 'var(--text-primary)'
                }}
              >
                <Heart size={18} fill={isFavorite ? '#ff4b72' : 'none'} />
                <span>{isFavorite ? 'Favorited' : 'Save to Favorites'}</span>
              </button>

              <button
                onClick={() => onToggleComplete(currentMeal.id)}
                className="btn-primary"
                style={{
                  padding: '10px 18px',
                  fontSize: '0.95rem',
                  background: isCompleted ? 'linear-gradient(135deg, #03DAC6 0%, #00a896 100%)' : 'var(--bg-card)',
                  color: isCompleted ? '#000' : '#fff',
                  fontWeight: 700,
                  border: isCompleted ? 'none' : '1px solid var(--border-color)'
                }}
              >
                <CheckCircle2 size={18} color={isCompleted ? '#000' : 'var(--accent-teal)'} />
                <span>{isCompleted ? 'Cooked!' : 'Mark as Cooked'}</span>
              </button>
            </div>
          </div>

          {/* Time & Macros Bar */}
          <div style={{ 
            display: 'flex', 
            gap: '24px', 
            padding: '16px 20px', 
            background: 'rgba(0, 0, 0, 0.3)', 
            borderRadius: '10px',
            marginBottom: '28px',
            fontSize: '0.95rem',
            color: 'var(--text-secondary)',
            flexWrap: 'wrap',
            border: '1px solid rgba(255, 255, 255, 0.03)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Clock size={18} color="var(--accent-teal)" />
              <span>Prep Time: <strong style={{ color: '#fff' }}>{currentMeal.prepTime}</strong></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ChefHat size={18} color="var(--accent-purple)" />
              <span>Cook Time: <strong style={{ color: '#fff' }}>{currentMeal.cookTime}</strong></span>
            </div>
            {currentMeal.macros && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '16px' }}>
                <span>Protein: <strong style={{ color: '#fff' }}>{currentMeal.macros.protein}</strong></span>
                <span>Carbs: <strong style={{ color: '#fff' }}>{currentMeal.macros.carbs}</strong></span>
                <span>Fiber: <strong style={{ color: 'var(--accent-teal)' }}>{currentMeal.macros.fiber}</strong></span>
              </div>
            )}
          </div>

          {/* Dedicated Portion Size per Person Banner */}
          <div className="portion-size-banner">
            <div style={{ background: 'rgba(3, 218, 198, 0.2)', padding: '12px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Users size={24} color="var(--accent-teal)" />
            </div>
            <div className="portion-size-content">
              <div style={{ fontSize: '0.85rem', color: 'var(--accent-teal)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                🍽️ Standard Portion Size Per Person (1 of 5 Servings)
              </div>
              <div style={{ fontSize: '1.05rem', color: '#fff', fontWeight: 700, marginBottom: '4px' }}>
                {activeTab === 'breakfast' && 'Approx. 300g–350g per person (1 Standard Bowl / 2 Slices Toast with Eggs & Sides)'}
                {activeTab === 'lunch' && 'Approx. 400g–450g per person (1 Full Plate of Lentils/Curry with Rice or Flatbread)'}
                {activeTab === 'dinner' && 'Approx. 350g–400g per person (1 Balanced Plate of Lean Protein & Roasted Vegetables)'}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Energy per person: <strong style={{ color: '#FFD700' }}>{currentMeal.calories}</strong> · Carefully portioned and balanced for daily nourishment.
              </div>
            </div>
          </div>

          {/* Family Health Warnings */}
          <FamilyHealthWarnings meal={currentMeal} compact={false} />

          {/* Grid: Ingredients & Instructions */}
          <div className="ingredients-instructions-grid">
            {/* Ingredients Section */}
            <div>
              <h3 style={{ 
                fontSize: '1.2rem', 
                fontWeight: 700, 
                color: 'var(--accent-teal)', 
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                borderBottom: '2px solid rgba(3, 218, 198, 0.3)',
                paddingBottom: '10px'
              }}>
                <ShoppingBag size={22} />
                <span>Exact Measuring Ingredients</span>
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '14px', fontStyle: 'italic' }}>
                Standardized in grams (g), ml, tablespoons (tbsp), and teaspoons (tsp).
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {currentMeal.ingredients.map((ing, idx) => (
                  <li 
                    key={idx}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: '12px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      fontSize: '0.95rem',
                      lineHeight: '1.4',
                      border: '1px solid rgba(255, 255, 255, 0.03)'
                    }}
                  >
                    <div style={{ 
                      background: 'rgba(187, 134, 252, 0.2)', 
                      borderRadius: '50%', 
                      width: '22px', 
                      height: '22px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '1px'
                    }}>
                      <Check size={14} color="var(--accent-purple)" />
                    </div>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions Section */}
            <div>
              <h3 style={{ 
                fontSize: '1.2rem', 
                fontWeight: 700, 
                color: 'var(--accent-purple)', 
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                borderBottom: '2px solid rgba(187, 134, 252, 0.3)',
                paddingBottom: '10px'
              }}>
                <ChefHat size={22} />
                <span>Step-by-Step Cooking Guide</span>
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '14px', fontStyle: 'italic' }}>
                Follow these numbered instructions for a delicious meal.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {currentMeal.instructions.map((step, idx) => {
                  const cleanStep = step.replace(/^\d+[\.\)\-\s]+/, '').trim();
                  return (
                    <div key={idx} className="step-card">
                      <div className="step-number-badge">{idx + 1}</div>
                      <div className="step-text">{cleanStep}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back Button and Grocery Action */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginTop: '36px',
          paddingTop: '24px',
          borderTop: '1px solid var(--border-color)',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <button 
            onClick={onBack}
            className="btn-secondary"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              fontSize: '1rem',
              fontWeight: 600,
              background: 'rgba(187, 134, 252, 0.15)',
              borderColor: 'var(--accent-purple)',
              color: '#fff',
              cursor: 'pointer'
            }}
          >
            <ArrowLeft size={18} color="var(--accent-purple)" />
            <span>Back to Calendar Grid</span>
          </button>

          <button 
            onClick={() => onOpenGroceryForDay(dayNumber)} 
            className="btn-teal"
            style={{ padding: '12px 22px', fontSize: '1rem' }}
          >
            <ShoppingBag size={18} />
            <span>Generate Grocery List for Day {dayNumber}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
