import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, Sun, Utensils, Moon, CheckCircle2, Heart, Clock, 
  Users, Sparkles, AlertCircle, ShoppingBag, ChefHat, Check 
} from 'lucide-react';

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

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '60px' }}>
      {/* Top Bar with Prominent Back Button */}
      <div style={{ 
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
      <div className="glass-panel" style={{ padding: '32px', border: '1px solid rgba(187, 134, 252, 0.25)' }}>
        {/* Header Section */}
        <div style={{ marginBottom: '24px' }}>
          <h1 className="text-gradient" style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '8px' }}>
            Halal Family Feast · Day {dayNumber}
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', margin: 0 }}>
            Curated unique recipes for 5 people (pregnant wife, 3-year-old child, elderly parents, and adult male).
          </p>
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
              <strong style={{ color: 'var(--accent-teal)', display: 'block', marginBottom: '2px' }}>Seasonal Family Note: </strong>
              {dayPlan.seasonalTip}
            </div>
          </div>
        )}

        {/* 3 Prominent Meal Navigation Tabs */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '12px', 
          background: 'rgba(0, 0, 0, 0.35)', 
          padding: '8px', 
          borderRadius: 'var(--radius-md)',
          marginBottom: '32px'
        }}>
          {['breakfast', 'lunch', 'dinner'].map((tab) => {
            const meal = dayPlan[tab];
            const tabCompleted = !!completedMeals[meal.id];
            const tabFav = !!favorites[meal.id];
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '16px 12px',
                  borderRadius: '12px',
                  background: isActive ? 'linear-gradient(135deg, rgba(187, 134, 252, 0.25) 0%, rgba(3, 218, 198, 0.2) 100%)' : 'transparent',
                  border: isActive ? '2px solid var(--accent-purple)' : '2px solid transparent',
                  color: isActive ? '#fff' : 'var(--text-secondary)',
                  fontWeight: isActive ? 700 : 500,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem' }}>
                  {getTabIcon(tab)}
                  <span style={{ textTransform: 'capitalize' }}>{tab}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>{meal.prepTime} + {meal.cookTime}</span>
                  {tabFav && <Heart size={14} color="#ff4b72" fill="#ff4b72" title="Favorited" />}
                  {tabCompleted && <CheckCircle2 size={14} color="var(--accent-teal)" title="Cooked" />}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Meal Details Section */}
        <div className="animate-fade-in" style={{ 
          background: 'rgba(255, 255, 255, 0.02)', 
          padding: '28px', 
          borderRadius: 'var(--radius-md)',
          border: '1px solid rgba(255, 255, 255, 0.06)'
        }}>
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

          {/* Grid: Ingredients & Instructions */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
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
                Follow these numbered instructions for a delicious family meal.
              </p>
              <ol style={{ paddingLeft: '24px', margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {currentMeal.instructions.map((step, idx) => (
                  <li 
                    key={idx}
                    style={{ 
                      fontSize: '0.95rem', 
                      lineHeight: '1.6',
                      color: 'var(--text-primary)',
                      paddingLeft: '6px',
                      fontWeight: 400
                    }}
                  >
                    {step}
                  </li>
                ))}
              </ol>
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
            <span>← Back to Calendar Grid</span>
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
