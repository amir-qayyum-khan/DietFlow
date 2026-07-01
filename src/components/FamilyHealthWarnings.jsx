import React, { useState } from 'react';
import { AlertTriangle, ChevronDown, ChevronUp, ShieldCheck, Pill, Wrench } from 'lucide-react';

/** Toggle health warnings panel across recipe views. Set true to re-enable. */
export const HEALTH_WARNINGS_ENABLED = false;

/**
 * Per-member config: neutral health-profile labels, accent color, background tint.
 * Keys match the data object keys in healthWarnings / modifications.
 * Labels are intentionally generic to protect household privacy.
 */
const MEMBERS = [
  {
    key: 'father',
    emoji: '🧓',
    label: 'Senior Member 1 (79 yrs)',
    subLabel: 'Hypertension · Blood thinner (Warfarin) · Max-flow medication',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.3)',
  },
  {
    key: 'mother',
    emoji: '👩',
    label: 'Senior Member 2 (56 yrs)',
    subLabel: 'Cognitive health · Hypertension · Stress management',
    color: '#818CF8',
    bg: 'rgba(129,140,248,0.08)',
    border: 'rgba(129,140,248,0.3)',
  },
  {
    key: 'wife',
    emoji: '🤰',
    label: 'Expecting Member',
    subLabel: 'Pregnancy food-safety · Listeria risk · Fully-cooked eggs required',
    color: '#38BDF8',
    bg: 'rgba(56,189,248,0.08)',
    border: 'rgba(56,189,248,0.3)',
  },
  {
    key: 'daughter',
    emoji: '👶',
    label: 'Toddler (3 yrs)',
    subLabel: 'Choking hazards · Spice sensitivity · Small portions',
    color: '#FB7185',
    bg: 'rgba(251,113,133,0.08)',
    border: 'rgba(251,113,133,0.3)',
  },
  {
    key: 'me',
    emoji: '🧔',
    label: 'Adult Member (Hernia · Sedentary)',
    subLabel: 'Hernia management · Gas-producing foods · Weight management',
    color: '#34D399',
    bg: 'rgba(52,211,153,0.08)',
    border: 'rgba(52,211,153,0.3)',
  },
];

/**
 * HealthSafetyWarnings — collapsible health-safety panel for each recipe.
 *
 * Props:
 *   meal       — the recipe object containing healthWarnings, modifications, supplementNote
 *   compact    — boolean; true inside the modal (smaller text/spacing)
 */
export default function FamilyHealthWarnings({ meal, compact = false }) {
  const [open, setOpen] = useState(false);

  if (!HEALTH_WARNINGS_ENABLED) return null;

  if (!meal) return null;

  const warnings     = meal.healthWarnings  || {};
  const modifications = meal.modifications  || {};
  const supplement   = meal.supplementNote  || '';

  // Build active members: those who have a warning OR modification
  const activeMembers = MEMBERS.filter(
    (m) => (warnings[m.key] && warnings[m.key].trim()) ||
            (modifications[m.key] && modifications[m.key].trim())
  );

  const hasContent = activeMembers.length > 0 || supplement;
  if (!hasContent) return null;

  const warningCount = activeMembers.length;

  /* ── responsive sizes ─────────────────────────────────────── */
  const titleSize  = compact ? '0.85rem' : '0.95rem';
  const bodySize   = compact ? '0.8rem'  : '0.88rem';
  const padding    = compact ? '12px 14px' : '16px 18px';
  const gap        = compact ? '10px' : '14px';

  return (
    <div style={{
      marginTop: compact ? '16px' : '24px',
      marginBottom: compact ? '16px' : '28px',
    }}>
      {/* ── Toggle Button ─────────────────────────────────────── */}
      <button
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: padding,
          background: open
            ? 'linear-gradient(135deg, rgba(245,158,11,0.14) 0%, rgba(251,113,133,0.10) 100%)'
            : 'rgba(245,158,11,0.08)',
          border: `1px solid ${open ? 'rgba(245,158,11,0.45)' : 'rgba(245,158,11,0.22)'}`,
          borderRadius: open ? '12px 12px 0 0' : '12px',
          cursor: 'pointer',
          transition: 'all 0.25s ease',
          gap: '12px',
          textAlign: 'left',
        }}
      >
        {/* Left: icon + label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: 0 }}>
          <div style={{
            background: 'rgba(245,158,11,0.18)',
            borderRadius: '50%',
            width: compact ? '30px' : '36px',
            height: compact ? '30px' : '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <AlertTriangle size={compact ? 15 : 18} color="#F59E0B" />
          </div>

          <div style={{ minWidth: 0 }}>
            <div style={{
              fontSize: titleSize,
              fontWeight: 700,
              color: '#F59E0B',
              lineHeight: 1.3,
            }}>
              Health Safety Warnings
            </div>
            <div style={{
              fontSize: compact ? '0.73rem' : '0.8rem',
              color: 'var(--text-secondary)',
              marginTop: '2px',
            }}>
              {warningCount > 0
                ? `${warningCount} member${warningCount > 1 ? 's' : ''} require attention for this meal`
                : 'Omega-3 supplement note applies'}
            </div>
          </div>
        </div>

        {/* Right: badge + chevron */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          {warningCount > 0 && (
            <span style={{
              background: '#F59E0B',
              color: '#000',
              fontWeight: 800,
              fontSize: '0.72rem',
              padding: '2px 8px',
              borderRadius: '99px',
              letterSpacing: '0.4px',
            }}>
              {warningCount} ALERT{warningCount > 1 ? 'S' : ''}
            </span>
          )}
          {open
            ? <ChevronUp size={18} color="#F59E0B" />
            : <ChevronDown size={18} color="var(--text-muted)" />
          }
        </div>
      </button>

      {/* ── Expanded Content ──────────────────────────────────── */}
      {open && (
        <div style={{
          background: 'rgba(20,20,20,0.7)',
          border: '1px solid rgba(245,158,11,0.22)',
          borderTop: 'none',
          borderRadius: '0 0 12px 12px',
          padding: compact ? '14px' : '18px',
          display: 'flex',
          flexDirection: 'column',
          gap: gap,
        }}>

          {/* ── Per-member warning cards ───────────────────────── */}
          {activeMembers.length > 0 && (
            <div style={{
              display: 'grid',
              /* 1 col on phones, 2 cols on tablets/desktops */
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
              gap: gap,
            }}>
              {activeMembers.map((m) => {
                const warn = warnings[m.key] || '';
                const mod  = modifications[m.key] || '';

                // Each warning/modification may contain " | " as separator (from Python script)
                const warnParts = warn ? warn.split(' | ').filter(Boolean) : [];
                const modParts  = mod  ? mod.split(' | ').filter(Boolean)  : [];

                return (
                  <div key={m.key} style={{
                    background: m.bg,
                    border: `1px solid ${m.border}`,
                    borderRadius: '10px',
                    padding: compact ? '12px' : '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}>
                    {/* Member header */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: compact ? '1.2rem' : '1.4rem', lineHeight: 1 }}>
                        {m.emoji}
                      </span>
                      <div>
                        <div style={{ fontSize: bodySize, fontWeight: 700, color: m.color }}>
                          {m.label}
                        </div>
                        <div style={{
                          fontSize: compact ? '0.68rem' : '0.73rem',
                          color: 'var(--text-muted)',
                          lineHeight: 1.3,
                        }}>
                          {m.subLabel}
                        </div>
                      </div>
                    </div>

                    {/* Warnings */}
                    {warnParts.length > 0 && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        {warnParts.map((w, i) => (
                          <div key={i} style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '7px',
                            fontSize: bodySize,
                            color: 'var(--text-primary)',
                            lineHeight: 1.45,
                          }}>
                            <AlertTriangle
                              size={compact ? 12 : 13}
                              color={m.color}
                              style={{ flexShrink: 0, marginTop: '2px' }}
                            />
                            <span>{w}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Modifications */}
                    {modParts.length > 0 && (
                      <div style={{
                        borderTop: `1px solid ${m.border}`,
                        paddingTop: '7px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '5px',
                      }}>
                        <div style={{
                          fontSize: compact ? '0.68rem' : '0.73rem',
                          fontWeight: 700,
                          color: m.color,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                          marginBottom: '2px',
                        }}>
                          <Wrench size={compact ? 10 : 11} color={m.color} />
                          Modification
                        </div>
                        {modParts.map((mod, i) => (
                          <div key={i} style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '7px',
                            fontSize: bodySize,
                            color: 'var(--text-secondary)',
                            lineHeight: 1.45,
                          }}>
                            <ShieldCheck
                              size={compact ? 12 : 13}
                              color={m.color}
                              style={{ flexShrink: 0, marginTop: '2px' }}
                            />
                            <span>{mod}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* ── Supplement Note ───────────────────────────────── */}
          {supplement && (
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
              background: 'rgba(56,189,248,0.08)',
              border: '1px solid rgba(56,189,248,0.25)',
              borderRadius: '10px',
              padding: compact ? '10px 12px' : '12px 16px',
            }}>
              <Pill
                size={compact ? 15 : 18}
                color="#38BDF8"
                style={{ flexShrink: 0, marginTop: '2px' }}
              />
              <div>
                <div style={{
                  fontSize: compact ? '0.73rem' : '0.78rem',
                  fontWeight: 700,
                  color: '#38BDF8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '4px',
                }}>
                  Omega-3 Supplement Note
                </div>
                <div style={{
                  fontSize: bodySize,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                }}>
                  {supplement}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
