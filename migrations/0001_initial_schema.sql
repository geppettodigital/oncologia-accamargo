-- Plataforma Oncológica - Schema Inicial
-- Criação das tabelas principais do sistema

-- Tabela de Usuários
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  role TEXT NOT NULL CHECK(role IN ('patient', 'doctor', 'nurse', 'navigator', 'financial', 'wellness', 'researcher', 'admin')),
  department TEXT,
  password_hash TEXT NOT NULL,
  active BOOLEAN DEFAULT 1,
  last_login DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Pacientes
CREATE TABLE IF NOT EXISTS patients (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER REFERENCES users(id),
  medical_record TEXT UNIQUE NOT NULL,
  birth_date DATE NOT NULL,
  gender TEXT CHECK(gender IN ('M', 'F', 'Other')),
  blood_type TEXT,
  phone TEXT,
  address TEXT,
  emergency_contact TEXT,
  insurance_info TEXT,
  diagnosis TEXT,
  stage TEXT,
  treatment_start_date DATE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Jornada do Paciente
CREATE TABLE IF NOT EXISTS patient_journey (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  patient_id INTEGER NOT NULL REFERENCES patients(id),
  stage TEXT NOT NULL,
  event_type TEXT NOT NULL,
  event_date DATETIME NOT NULL,
  description TEXT,
  status TEXT CHECK(status IN ('pending', 'in-progress', 'completed', 'cancelled')),
  responsible_user_id INTEGER REFERENCES users(id),
  notes TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Consultas
CREATE TABLE IF NOT EXISTS appointments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  patient_id INTEGER NOT NULL REFERENCES patients(id),
  doctor_id INTEGER NOT NULL REFERENCES users(id),
  appointment_date DATETIME NOT NULL,
  appointment_type TEXT NOT NULL,
  status TEXT CHECK(status IN ('scheduled', 'confirmed', 'completed', 'cancelled', 'no-show')),
  notes TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Sintomas Reportados
CREATE TABLE IF NOT EXISTS symptom_reports (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  patient_id INTEGER NOT NULL REFERENCES patients(id),
  report_date DATETIME NOT NULL,
  symptoms TEXT NOT NULL,
  severity INTEGER CHECK(severity BETWEEN 1 AND 10),
  ai_analysis TEXT,
  urgency_level TEXT CHECK(urgency_level IN ('low', 'medium', 'high', 'critical')),
  action_taken TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Avaliações de Bem-Estar
CREATE TABLE IF NOT EXISTS wellness_assessments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  patient_id INTEGER NOT NULL REFERENCES patients(id),
  assessment_date DATETIME NOT NULL,
  anxiety_score INTEGER CHECK(anxiety_score BETWEEN 0 AND 10),
  depression_score INTEGER CHECK(depression_score BETWEEN 0 AND 10),
  stress_level INTEGER CHECK(stress_level BETWEEN 0 AND 10),
  sleep_quality INTEGER CHECK(sleep_quality BETWEEN 0 AND 10),
  pain_level INTEGER CHECK(pain_level BETWEEN 0 AND 10),
  fatigue_level INTEGER CHECK(fatigue_level BETWEEN 0 AND 10),
  social_support TEXT,
  notes TEXT,
  professional_id INTEGER REFERENCES users(id),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Análises Financeiras
CREATE TABLE IF NOT EXISTS financial_analyses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  patient_id INTEGER REFERENCES patients(id),
  procedure_code TEXT NOT NULL,
  procedure_description TEXT,
  estimated_cost DECIMAL(10,2),
  insurance_coverage DECIMAL(10,2),
  glosa_risk_score DECIMAL(3,2),
  glosa_prevented BOOLEAN DEFAULT 0,
  amount_saved DECIMAL(10,2),
  analysis_date DATETIME NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Predições de IA
CREATE TABLE IF NOT EXISTS ai_predictions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  patient_id INTEGER REFERENCES patients(id),
  prediction_type TEXT NOT NULL,
  prediction_value DECIMAL(3,2),
  confidence_score DECIMAL(3,2),
  factors TEXT,
  recommendations TEXT,
  model_version TEXT,
  prediction_date DATETIME NOT NULL,
  feedback_received BOOLEAN DEFAULT 0,
  feedback_value TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Logs de Auditoria
CREATE TABLE IF NOT EXISTS audit_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER REFERENCES users(id),
  action TEXT NOT NULL,
  resource_type TEXT,
  resource_id INTEGER,
  ip_address TEXT,
  user_agent TEXT,
  result TEXT,
  metadata TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Navegação de Pacientes
CREATE TABLE IF NOT EXISTS patient_navigation (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  patient_id INTEGER NOT NULL REFERENCES patients(id),
  navigator_id INTEGER NOT NULL REFERENCES users(id),
  current_stage TEXT NOT NULL,
  bottleneck_identified TEXT,
  action_taken TEXT,
  next_steps TEXT,
  priority TEXT CHECK(priority IN ('low', 'medium', 'high', 'critical')),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Pesquisa Clínica
CREATE TABLE IF NOT EXISTS research_studies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  study_code TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  phase TEXT,
  status TEXT CHECK(status IN ('planning', 'recruiting', 'active', 'completed', 'terminated')),
  enrolled_patients INTEGER DEFAULT 0,
  target_enrollment INTEGER,
  start_date DATE,
  end_date DATE,
  principal_investigator_id INTEGER REFERENCES users(id),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Participação em Estudos
CREATE TABLE IF NOT EXISTS study_participants (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  study_id INTEGER NOT NULL REFERENCES research_studies(id),
  patient_id INTEGER NOT NULL REFERENCES patients(id),
  enrollment_date DATE NOT NULL,
  status TEXT CHECK(status IN ('screening', 'enrolled', 'active', 'completed', 'withdrawn')),
  withdrawal_reason TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(study_id, patient_id)
);

-- Índices para otimização de queries
CREATE INDEX IF NOT EXISTS idx_patients_user_id ON patients(user_id);
CREATE INDEX IF NOT EXISTS idx_journey_patient_id ON patient_journey(patient_id);
CREATE INDEX IF NOT EXISTS idx_appointments_patient_id ON appointments(patient_id);
CREATE INDEX IF NOT EXISTS idx_appointments_doctor_id ON appointments(doctor_id);
CREATE INDEX IF NOT EXISTS idx_appointments_date ON appointments(appointment_date);
CREATE INDEX IF NOT EXISTS idx_symptoms_patient_id ON symptom_reports(patient_id);
CREATE INDEX IF NOT EXISTS idx_wellness_patient_id ON wellness_assessments(patient_id);
CREATE INDEX IF NOT EXISTS idx_financial_patient_id ON financial_analyses(patient_id);
CREATE INDEX IF NOT EXISTS idx_predictions_patient_id ON ai_predictions(patient_id);
CREATE INDEX IF NOT EXISTS idx_audit_user_id ON audit_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_created ON audit_logs(created_at);
CREATE INDEX IF NOT EXISTS idx_navigation_patient_id ON patient_navigation(patient_id);
CREATE INDEX IF NOT EXISTS idx_participants_study_id ON study_participants(study_id);
CREATE INDEX IF NOT EXISTS idx_participants_patient_id ON study_participants(patient_id);