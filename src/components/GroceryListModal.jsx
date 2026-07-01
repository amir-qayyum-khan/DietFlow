import React, { useState, useMemo } from 'react';
import { X, ShoppingBag, Copy, Check, Calendar, CheckSquare, Square, Sparkles, Filter, Trash2 } from 'lucide-react';

export default function GroceryListModal({ 
  isOpen, 
  onClose, 
  recipesData, 
  initialDay = null 
}) {
  const [mode, setMode] = useState(initialDay ? 'day' : 'week'); // 'day' | 'week' | 'month'
  const [selectedDay, setSelectedDay] = useState(initialDay || 1);
  const [selectedWeek, setSelectedWeek] = useState(1); // 1 to 5
  const [checkedItems, setCheckedItems] = useState({});
  const [copied, setCopied] = useState(false);

  // Compute ingredients based on mode
  const aggregatedList = useMemo(() => {
    let daysToInclude = [];
    if (mode === 'day') {
      daysToInclude = [selectedDay];
    } else if (mode === 'week') {
      const start = (selectedWeek - 1) * 7 + 1;
      const end = Math.min(start + 6, recipesData.length);
      for (let i = start; i <= end; i++) daysToInclude.push(i);
    } else if (mode === 'month') {
      for (let i = 1; i <= recipesData.length; i++) daysToInclude.push(i);
    }

    const items = [];
    daysToInclude.forEach(dNum => {
      const dayPlan = recipesData[dNum - 1];
      if (dayPlan) {
        ['breakfast', 'lunch', 'dinner'].forEach(mealType => {
          dayPlan[mealType].ingredients.forEach(ing => {
            // Keep original string but we can deduplicate exact matches
            if (!items.includes(ing)) {
              items.push(ing);
            }
          });
        });
      }
    });
    return items.sort();
  }, [mode, selectedDay, selectedWeek, recipesData]);

  const toggleItemCheck = (item) => {
    setCheckedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const handleCopyClipboard = () => {
    const textToCopy = [
      `🛒 Halal Family Nourish Grocery List (${mode === 'day' ? `Day ${selectedDay}` : mode === 'week' ? `Week ${selectedWeek}` : 'Full Month'})`,
      `For 5 People Family Standard`,
      `---------------------------------------`,
      ...aggregatedList.map(item => `${checkedItems[item] ? '[x]' : '[ ]'} ${item}`)
    ].join('\n');

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const clearChecked = () => {
    setCheckedItems({});
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-content glass-panel" 
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '24px', border: '1px solid rgba(3, 218, 198, 0.4)', maxWidth: '680px' }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              background: 'rgba(3, 218, 198, 0.15)',
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <ShoppingBag size={22} color="var(--accent-teal)" />
            </div>
            <div>
              <h2 className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>
                DietFlow Grocery Hub
              </h2>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>
                Exact Metric Units for 5 People Family Meals
              </p>
            </div>
          </div>
          <button onClick={onClose} className="btn-icon">
            <X size={20} />
          </button>
        </div>

        {/* Mode Selector Tabs */}
        <div style={{ 
          display: 'flex', 
          gap: '8px', 
          background: 'rgba(0,0,0,0.3)', 
          padding: '6px', 
          borderRadius: 'var(--radius-md)',
          marginBottom: '16px' 
        }}>
          {[
            { id: 'day', label: 'Single Day' },
            { id: 'week', label: '7-Day Week' },
            { id: 'month', label: 'Full Month' }
          ].map(m => (
            <button
              key={m.id}
              onClick={() => {
                setMode(m.id);
                setCheckedItems({});
              }}
              style={{
                flex: 1,
                padding: '10px',
                borderRadius: '8px',
                background: mode === m.id ? 'var(--accent-teal)' : 'transparent',
                color: mode === m.id ? '#000' : 'var(--text-secondary)',
                fontWeight: mode === m.id ? 700 : 400,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* Sub-selector for Day or Week */}
        {mode === 'day' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', overflowX: 'auto', paddingBottom: '8px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>Select Day:</span>
            <select 
              value={selectedDay} 
              onChange={(e) => setSelectedDay(Number(e.target.value))}
              className="glass-panel-subtle"
              style={{ padding: '8px 12px', borderRadius: '6px', color: '#fff', border: '1px solid var(--border-color)', outline: 'none' }}
            >
              {recipesData.map((_, idx) => (
                <option key={idx + 1} value={idx + 1} style={{ background: '#121212' }}>
                  Day {idx + 1}
                </option>
              ))}
            </select>
          </div>
        )}

        {mode === 'week' && (
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
            {[
              { w: 1, label: 'Week 1 (Days 1-7)' },
              { w: 2, label: 'Week 2 (Days 8-14)' },
              { w: 3, label: 'Week 3 (Days 15-21)' },
              { w: 4, label: 'Week 4 (Days 22-28)' },
              { w: 5, label: 'Week 5 (Days 29-31)' }
            ].map(wk => (
              <button
                key={wk.w}
                onClick={() => setSelectedWeek(wk.w)}
                className={selectedWeek === wk.w ? 'btn-primary' : 'btn-secondary'}
                style={{
                  padding: '6px 12px',
                  fontSize: '0.8rem',
                  background: selectedWeek === wk.w ? 'rgba(187, 134, 252, 0.25)' : 'rgba(255,255,255,0.04)',
                  borderColor: selectedWeek === wk.w ? 'var(--accent-purple)' : 'var(--border-color)'
                }}
              >
                {wk.label}
              </button>
            ))}
          </div>
        )}

        {/* List Action Toolbar */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '10px 14px', 
          background: 'rgba(255, 255, 255, 0.03)', 
          borderRadius: '8px', 
          marginBottom: '16px',
          border: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Showing <strong>{aggregatedList.length}</strong> unique ingredients
            {checkedCount > 0 && <span style={{ color: 'var(--accent-teal)' }}> ({checkedCount} checked off)</span>}
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            {checkedCount > 0 && (
              <button 
                onClick={clearChecked} 
                className="btn-secondary" 
                style={{ padding: '6px 10px', fontSize: '0.75rem', color: '#ff4b72' }}
                title="Clear all checkmarks"
              >
                <Trash2 size={13} />
                <span>Reset</span>
              </button>
            )}

            <button 
              onClick={handleCopyClipboard}
              className="btn-teal"
              style={{ padding: '6px 14px', fontSize: '0.8rem' }}
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy List'}</span>
            </button>
          </div>
        </div>

        {/* Ingredients Checklist */}
        <div style={{ 
          maxHeight: '350px', 
          overflowY: 'auto', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '8px',
          paddingRight: '6px'
        }}>
          {aggregatedList.map((item, idx) => {
            const isChecked = !!checkedItems[item];
            return (
              <div
                key={idx}
                onClick={() => toggleItemCheck(item)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 14px',
                  background: isChecked ? 'rgba(3, 218, 198, 0.08)' : 'rgba(0, 0, 0, 0.25)',
                  border: isChecked ? '1px solid rgba(3, 218, 198, 0.3)' : '1px solid transparent',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  opacity: isChecked ? 0.6 : 1
                }}
              >
                <div style={{ color: isChecked ? 'var(--accent-teal)' : 'var(--text-muted)', display: 'flex', alignItems: 'center' }}>
                  {isChecked ? <CheckSquare size={18} /> : <Square size={18} />}
                </div>
                <span style={{ 
                  fontSize: '0.9rem', 
                  color: isChecked ? 'var(--text-secondary)' : 'var(--text-primary)',
                  textDecoration: isChecked ? 'line-through' : 'none',
                  flex: 1
                }}>
                  {item}
                </span>
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
          <button onClick={onClose} className="btn-primary" style={{ padding: '8px 24px' }}>
            Close Grocery Hub
          </button>
        </div>
      </div>
    </div>
  );
}
