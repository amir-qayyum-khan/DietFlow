import React from 'react';
import { Calendar as CalendarIcon, ShoppingBag, Search, ChevronLeft, ChevronRight, Sparkles, Utensils } from 'lucide-react';

export default function Navbar({ 
  currentDate, 
  onPrevMonth, 
  onNextMonth, 
  onOpenGrocery, 
  onToggleSearch,
  isSearchOpen 
}) {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const monthName = monthNames[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  return (
    <header className="glass-panel" style={{ padding: '16px 24px', marginBottom: '24px' }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        flexWrap: 'wrap', 
        gap: '16px' 
      }}>
        {/* Brand Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            background: 'linear-gradient(135deg, var(--accent-purple) 0%, var(--accent-teal) 100%)',
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px rgba(187, 134, 252, 0.4)'
          }}>
            <Utensils size={24} color="#000" style={{ strokeWidth: 2.5 }} />
          </div>
          <div>
            <h1 className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.5px' }}>
              DietFlow
            </h1>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={13} color="var(--accent-teal)" />
              Daily Family Meal Scheduler & Grocery Hub
            </p>
          </div>
        </div>

        {/* Month Selector Navigation */}
        <div className="glass-panel-subtle" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px', 
          padding: '6px 14px',
          border: '1px solid var(--border-color)'
        }}>
          <button 
            onClick={onPrevMonth} 
            className="btn-icon" 
            title="Previous Month"
            style={{ width: '32px', height: '32px' }}
          >
            <ChevronLeft size={18} />
          </button>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: '150px', justifyContent: 'center' }}>
            <CalendarIcon size={18} color="var(--accent-purple)" />
            <span style={{ fontWeight: 600, fontSize: '1.05rem', color: '#fff' }}>
              {monthName} {year}
            </span>
          </div>

          <button 
            onClick={onNextMonth} 
            className="btn-icon" 
            title="Next Month"
            style={{ width: '32px', height: '32px' }}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Quick Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button 
            onClick={onToggleSearch}
            className={isSearchOpen ? "btn-primary" : "btn-secondary"}
            style={{ padding: '9px 16px', fontSize: '0.9rem' }}
          >
            <Search size={16} />
            <span>{isSearchOpen ? "Close Search" : "Search Recipes"}</span>
          </button>

          <button 
            onClick={onOpenGrocery}
            className="btn-teal"
            style={{ padding: '9px 18px', fontSize: '0.9rem' }}
          >
            <ShoppingBag size={16} />
            <span>Grocery List</span>
          </button>
        </div>
      </div>
    </header>
  );
}
