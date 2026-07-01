import React, { useState } from 'react';
import { 
  X, Sun, Utensils, Moon, CheckCircle2, Heart, Clock, 
  Users, Sparkles, AlertCircle, ShoppingBag, ChefHat, Check 
} from 'lucide-react';

export default function DayMealModal({
  dayNumber,
  dayPlan,
  onClose,
  completedMeals = {},
  onToggleComplete,
  favorites = {},
  onToggleFavorite,
  onOpenGroceryForDay
}) {
  const [activeTab, setActiveTab] = useState('breakfast'); // 'breakfast' | 'lunch' | 'dinner'

  if (!dayPlan) return null;

  const currentMeal = dayPlan[activeTab];
  const isCompleted = !!completedMeals[currentMeal.id];
  const isFavorite = !!favorites[currentMeal.id];

  const getTabIcon = (tab) => {
    switch(tab) {
      case 'breakfast': return <Sun size={18} color="#FFD700" />;
      case 'lunch': return <Utensils size={18} color="var(--accent-teal)" />;
      case 'dinner': return <Moon size={18} color="var(--accent-purple)" />;
      default: return null;
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-content glass-panel" 
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '24px', border: '1px solid rgba(187, 134, 252, 0.3)' }}
      >
        {/* Header Section */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div>
            <span className="badge badge-purple" style={{ marginBottom: '6px' }}>
              <Sparkles size={12} /> Day {dayNumber} Menu
            </span>
            <h2 className="text-gradient" style={{ fontSize: '1.6rem', fontWeight: 700 }}>
              Halal Family Feast
            </h2>
          </div>
          <button onClick={onClose} className="btn-icon" title="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Seasonal Tip Banner */}
        {dayPlan.seasonalTip && (
          <div style={{ 
            background: 'rgba(3, 218, 198, 0.1)', 
            borderLeft: '4px solid var(--accent-teal)', 
            padding: '12px 16px', 
            borderRadius: 'var(--radius-sm)',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '0.85rem',
            color: 'var(--text-primary)'
          }}>
            <AlertCircle size={20} color="var(--accent-teal)" style={{ flexShrink: 0 }} />
            <div>
              <strong style={{ color: 'var(--accent-teal)' }}>Seasonal Family Note: </strong>
              {dayPlan.seasonalTip}
            </div>
          </div>
        )}

        {/* Meal Navigation Tabs */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr 1fr', 
          gap: '8px', 
          background: 'rgba(0, 0, 0, 0.3)', 
          padding: '6px', 
          borderRadius: 'var(--radius-md)',
          marginBottom: '24px'
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
                  padding: '12px',
                  borderRadius: '10px',
                  background: isActive ? 'linear-gradient(135deg, rgba(187, 134, 252, 0.2) 0%, rgba(3, 218, 198, 0.15) 100%)' : 'transparent',
                  border: isActive ? '1px solid var(--accent-purple)' : '1px solid transparent',
                  color: isActive ? '#fff' : 'var(--text-secondary)',
                  fontWeight: isActive ? 600 : 400,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {getTabIcon(tab)}
                  <span style={{ textTransform: 'capitalize' }}>{tab}</span>
                </div>
                <div style={{ display: 'flex', gap: '4px' }}>
                  {tabFav && <Heart size={12} color="#ff4b72" fill="#ff4b72" />}
                  {tabCompleted && <CheckCircle2 size={12} color="var(--accent-teal)" />}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Meal Details */}
        <div className="animate-fade-in" style={{ 
          background: 'rgba(255, 255, 255, 0.02)', 
          padding: '20px', 
          borderRadius: 'var(--radius-md)',
          border: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          {/* Meal Title & Actions */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
            <div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '8px', alignItems: 'center' }}>
                <span className="badge badge-teal">{currentMeal.cuisine} Cuisine</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Users size={14} color="var(--accent-purple)" /> 5 People (Family Standard)
                </span>
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', margin: 0 }}>
                {currentMeal.title}
              </h3>
            </div>

            {/* Quick action buttons for this recipe */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => onToggleFavorite(currentMeal.id)}
                className="btn-secondary"
                style={{
                  padding: '8px 12px',
                  background: isFavorite ? 'rgba(255, 75, 114, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                  borderColor: isFavorite ? '#ff4b72' : 'var(--border-color)',
                  color: isFavorite ? '#ff4b72' : 'var(--text-primary)'
                }}
                title="Save to Favorites"
              >
                <Heart size={16} fill={isFavorite ? '#ff4b72' : 'none'} />
                <span>{isFavorite ? 'Favorited' : 'Favorite'}</span>
              </button>

              <button
                onClick={() => onToggleComplete(currentMeal.id)}
                className="btn-primary"
                style={{
                  padding: '8px 14px',
                  background: isCompleted ? 'linear-gradient(135deg, #03DAC6 0%, #00a896 100%)' : 'var(--bg-card)',
                  color: isCompleted ? '#000' : '#fff',
                  fontWeight: 600,
                  border: isCompleted ? 'none' : '1px solid var(--border-color)'
                }}
              >
                <CheckCircle2 size={16} color={isCompleted ? '#000' : 'var(--accent-teal)'} />
                <span>{isCompleted ? 'Cooked!' : 'Mark Cooked'}</span>
              </button>
            </div>
          </div>

          {/* Time & Info Bar */}
          <div style={{ 
            display: 'flex', 
            gap: '20px', 
            padding: '12px 16px', 
            background: 'rgba(0, 0, 0, 0.25)', 
            borderRadius: '8px',
            marginBottom: '20px',
            fontSize: '0.85rem',
            color: 'var(--text-secondary)',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={15} color="var(--accent-teal)" />
              <span>Prep Time: <strong style={{ color: '#fff' }}>{currentMeal.prepTime}</strong></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ChefHat size={15} color="var(--accent-purple)" />
              <span>Cook Time: <strong style={{ color: '#fff' }}>{currentMeal.cookTime}</strong></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={15} color="#FFD700" />
              <span>Halal & Health Optimized</span>
            </div>
          </div>

          {/* Grid: Ingredients & Instructions */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {/* Ingredients */}
            <div>
              <h4 style={{ 
                fontSize: '1.05rem', 
                fontWeight: 600, 
                color: 'var(--accent-teal)', 
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                paddingBottom: '8px'
              }}>
                <ShoppingBag size={18} />
                <span>Exact Measuring Ingredients (g, ml, tbsp, tsp)</span>
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {currentMeal.ingredients.map((ing, idx) => (
                  <li 
                    key={idx}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: '10px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      lineHeight: '1.4'
                    }}
                  >
                    <div style={{ 
                      background: 'rgba(187, 134, 252, 0.15)', 
                      borderRadius: '50%', 
                      width: '20px', 
                      height: '20px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '1px'
                    }}>
                      <Check size={12} color="var(--accent-purple)" />
                    </div>
                    <span style={{ color: 'var(--text-primary)' }}>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div>
              <h4 style={{ 
                fontSize: '1.05rem', 
                fontWeight: 600, 
                color: 'var(--accent-purple)', 
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                paddingBottom: '8px'
              }}>
                <ChefHat size={18} />
                <span>Step-by-Step Cooking Instructions</span>
              </h4>
              <ol style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {currentMeal.instructions.map((step, idx) => (
                  <li 
                    key={idx}
                    style={{ 
                      fontSize: '0.9rem', 
                      lineHeight: '1.5',
                      color: 'var(--text-primary)',
                      paddingLeft: '4px'
                    }}
                  >
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginTop: '24px',
          paddingTop: '16px',
          borderTop: '1px solid var(--border-color)',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <button 
            onClick={() => {
              onClose();
              if (onOpenGroceryForDay) onOpenGroceryForDay(dayNumber);
            }} 
            className="btn-teal"
          >
            <ShoppingBag size={16} />
            <span>Generate Grocery List for Day {dayNumber}</span>
          </button>

          <button onClick={onClose} className="btn-secondary">
            <span>Done Viewing</span>
          </button>
        </div>
      </div>
    </div>
  );
}
