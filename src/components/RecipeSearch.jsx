import React, { useState, useMemo } from 'react';
import { Search, X, Filter, Sun, Utensils, Moon, ArrowRight, Sparkles } from 'lucide-react';

export default function RecipeSearch({ 
  isOpen, 
  onClose, 
  recipesData, 
  onSelectResult 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [mealFilter, setMealFilter] = useState('all'); // 'all' | 'breakfast' | 'lunch' | 'dinner'
  const [cuisineFilter, setCuisineFilter] = useState('all');

  // Extract unique cuisines
  const availableCuisines = useMemo(() => {
    const cuisines = new Set();
    recipesData.forEach(day => {
      cuisines.add(day.breakfast.cuisine);
      cuisines.add(day.lunch.cuisine);
      cuisines.add(day.dinner.cuisine);
    });
    return Array.from(cuisines).sort();
  }, [recipesData]);

  // Filter recipes
  const searchResults = useMemo(() => {
    if (!searchQuery.trim() && mealFilter === 'all' && cuisineFilter === 'all') {
      return [];
    }

    const q = searchQuery.toLowerCase().trim();
    const results = [];

    recipesData.forEach((day, idx) => {
      const dayNum = idx + 1;
      ['breakfast', 'lunch', 'dinner'].forEach(mealType => {
        if (mealFilter !== 'all' && mealFilter !== mealType) return;

        const meal = day[mealType];
        if (cuisineFilter !== 'all' && meal.cuisine !== cuisineFilter) return;

        // Check query match against title or ingredients
        const matchTitle = meal.title.toLowerCase().includes(q);
        const matchIng = meal.ingredients.some(ing => ing.toLowerCase().includes(q));

        if (!q || matchTitle || matchIng) {
          results.push({
            dayNumber: dayNum,
            mealType,
            meal,
            dayPlan: day
          });
        }
      });
    });

    return results;
  }, [searchQuery, mealFilter, cuisineFilter, recipesData]);

  if (!isOpen) return null;

  const getMealIcon = (type) => {
    switch(type) {
      case 'breakfast': return <Sun size={14} color="#FFD700" />;
      case 'lunch': return <Utensils size={14} color="var(--accent-teal)" />;
      case 'dinner': return <Moon size={14} color="var(--accent-purple)" />;
      default: return null;
    }
  };

  return (
    <div className="glass-panel animate-fade-in" style={{ padding: '24px', marginBottom: '30px', border: '1px solid var(--accent-purple)' }}>
      {/* Top Search Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Search size={20} color="var(--accent-purple)" />
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: '#fff' }}>
            Recipe Search & Ingredient Finder
          </h3>
        </div>
        <button onClick={onClose} className="btn-icon">
          <X size={18} />
        </button>
      </div>

      {/* Input Field */}
      <div style={{ position: 'relative', marginBottom: '16px' }}>
        <input
          type="text"
          placeholder="Search by ingredient (e.g., Chicken, Oats, Paneer, Mutton) or recipe name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoFocus
          style={{
            width: '100%',
            padding: '14px 18px 14px 44px',
            borderRadius: '12px',
            background: 'rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#fff',
            fontSize: '1rem',
            outline: 'none',
            boxSizing: 'border-box'
          }}
        />
        <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
        {searchQuery && (
          <button 
            onClick={() => setSearchQuery('')}
            style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#aaa', cursor: 'pointer' }}
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Filter Pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Filter size={13} /> Meal:
          </span>
          {['all', 'breakfast', 'lunch', 'dinner'].map(m => (
            <button
              key={m}
              onClick={() => setMealFilter(m)}
              className={mealFilter === m ? 'btn-primary' : 'btn-secondary'}
              style={{ padding: '6px 12px', fontSize: '0.8rem', textTransform: 'capitalize' }}
            >
              {m}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Cuisine:</span>
          <select
            value={cuisineFilter}
            onChange={(e) => setCuisineFilter(e.target.value)}
            className="glass-panel-subtle"
            style={{ padding: '6px 12px', borderRadius: '6px', color: '#fff', border: '1px solid var(--border-color)', outline: 'none', fontSize: '0.8rem' }}
          >
            <option value="all" style={{ background: '#121212' }}>All Cuisines</option>
            {availableCuisines.map((c, i) => (
              <option key={i} value={c} style={{ background: '#121212' }}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Display */}
      <div>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>
          {searchResults.length === 0 ? (
            <span>Type above or select filters to discover recipes across the 31-day menu.</span>
          ) : (
            <span>Found <strong style={{ color: 'var(--accent-teal)' }}>{searchResults.length}</strong> matching recipes:</span>
          )}
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', 
          gap: '12px',
          maxHeight: '380px',
          overflowY: 'auto',
          paddingRight: '6px'
        }}>
          {searchResults.map((res, idx) => (
            <div
              key={idx}
              onClick={() => {
                onSelectResult(res.dayNumber, res.mealType);
                onClose();
              }}
              className="glass-panel-subtle glass-panel-hover"
              style={{
                padding: '14px',
                borderRadius: '10px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.15s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span className="badge badge-purple" style={{ fontSize: '0.7rem' }}>
                    Day {res.dayNumber}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', textTransform: 'capitalize', color: 'var(--text-secondary)' }}>
                    {getMealIcon(res.mealType)}
                    <span>{res.mealType}</span>
                  </div>
                </div>

                <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', margin: '0 0 6px 0' }}>
                  {res.meal.title}
                </h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--accent-teal)', margin: 0 }}>
                  {res.meal.cuisine} Cuisine
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: '10px', paddingTop: '8px', borderTop: '1px solid rgba(255, 255, 255, 0.04)', fontSize: '0.75rem', color: 'var(--accent-purple)' }}>
                <span>View Full Recipe</span>
                <ArrowRight size={14} style={{ marginLeft: '4px' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
