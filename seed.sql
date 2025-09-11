-- Seed data for Plataforma Oncológica
-- Dados de teste para desenvolvimento

-- Inserir usuários de teste
INSERT OR IGNORE INTO users (email, name, role, department, password_hash, active) VALUES 
  ('joao.silva@hospital.com', 'Dr. João Silva', 'doctor', 'Oncologia', 'hash_senha_123', 1),
  ('maria.santos@hospital.com', 'Enf. Maria Santos', 'navigator', 'Navegação', 'hash_senha_456', 1),
  ('ana.costa@hospital.com', 'Psic. Ana Costa', 'wellness', 'Bem-Estar', 'hash_senha_789', 1),
  ('pedro.oliveira@hospital.com', 'Pedro Oliveira', 'financial', 'Financeiro', 'hash_senha_012', 1),
  ('carlos.research@hospital.com', 'Dr. Carlos Mendes', 'researcher', 'Pesquisa', 'hash_senha_345', 1),
  ('admin@hospital.com', 'Administrador', 'admin', 'TI', 'hash_senha_678', 1),
  ('paciente1@email.com', 'José Santos', 'patient', NULL, 'hash_senha_901', 1),
  ('paciente2@email.com', 'Maria Oliveira', 'patient', NULL, 'hash_senha_234', 1),
  ('paciente3@email.com', 'Ana Silva', 'patient', NULL, 'hash_senha_567', 1);

-- Inserir pacientes
INSERT OR IGNORE INTO patients (user_id, medical_record, birth_date, gender, blood_type, phone, diagnosis, stage, treatment_start_date) VALUES 
  (7, 'MR001', '1968-05-15', 'M', 'O+', '11-98765-4321', 'Adenocarcinoma de pulmão', 'IIIA', '2024-01-01'),
  (8, 'MR002', '1982-08-22', 'F', 'A+', '11-98765-4322', 'Câncer de mama', 'IIB', '2024-01-10'),
  (9, 'MR003', '1975-03-10', 'F', 'B+', '11-98765-4323', 'Câncer colorretal', 'IIC', '2024-01-05');

-- Inserir jornada dos pacientes
INSERT OR IGNORE INTO patient_journey (patient_id, stage, event_type, event_date, description, status, responsible_user_id) VALUES 
  (1, 'diagnosis', 'Primeira consulta', '2024-01-01', 'Consulta inicial com oncologista', 'completed', 1),
  (1, 'diagnosis', 'Exames solicitados', '2024-01-02', 'Tomografia e exames laboratoriais', 'completed', 1),
  (1, 'diagnosis', 'Biópsia', '2024-01-05', 'Biópsia guiada por CT', 'completed', 1),
  (1, 'treatment', 'Início quimioterapia', '2024-01-15', 'Primeira sessão de quimioterapia', 'in-progress', 1),
  (2, 'diagnosis', 'Mamografia', '2024-01-08', 'Mamografia de rastreamento', 'completed', 1),
  (2, 'treatment', 'Cirurgia', '2024-01-20', 'Mastectomia parcial', 'completed', 1),
  (2, 'treatment', 'Radioterapia', '2024-02-01', 'Início da radioterapia adjuvante', 'pending', 1);

-- Inserir consultas agendadas
INSERT OR IGNORE INTO appointments (patient_id, doctor_id, appointment_date, appointment_type, status) VALUES 
  (1, 1, '2024-02-15 09:00', 'Retorno', 'scheduled'),
  (2, 1, '2024-02-10 10:30', 'Avaliação pós-cirúrgica', 'scheduled'),
  (3, 1, '2024-02-12 14:00', 'Consulta de rotina', 'scheduled');

-- Inserir relatórios de sintomas
INSERT OR IGNORE INTO symptom_reports (patient_id, report_date, symptoms, severity, urgency_level) VALUES 
  (1, '2024-01-28', 'Náusea e fadiga após quimioterapia', 6, 'medium'),
  (2, '2024-01-25', 'Dor no local da cirurgia', 4, 'low'),
  (3, '2024-01-26', 'Perda de apetite', 5, 'medium');

-- Inserir avaliações de bem-estar
INSERT OR IGNORE INTO wellness_assessments (patient_id, assessment_date, anxiety_score, depression_score, stress_level, sleep_quality, pain_level, fatigue_level, social_support, professional_id) VALUES 
  (1, '2024-01-25', 6, 4, 7, 5, 4, 6, 'strong', 3),
  (2, '2024-01-26', 5, 3, 5, 6, 3, 4, 'moderate', 3),
  (3, '2024-01-27', 7, 5, 8, 4, 5, 7, 'strong', 3);

-- Inserir análises financeiras
INSERT OR IGNORE INTO financial_analyses (patient_id, procedure_code, procedure_description, estimated_cost, insurance_coverage, glosa_risk_score, glosa_prevented, amount_saved, analysis_date) VALUES 
  (1, '99213', 'Consulta oncológica', 500.00, 400.00, 0.15, 0, 0, '2024-01-28'),
  (2, '19301', 'Mastectomia parcial', 15000.00, 12000.00, 0.25, 1, 3000.00, '2024-01-20'),
  (3, '96413', 'Quimioterapia infusional', 5000.00, 4500.00, 0.20, 0, 0, '2024-01-27');

-- Inserir predições de IA
INSERT OR IGNORE INTO ai_predictions (patient_id, prediction_type, prediction_value, confidence_score, model_version, prediction_date) VALUES 
  (1, 'treatment_adherence', 0.82, 0.90, 'v2.1.0', '2024-01-28'),
  (2, 'recurrence_risk', 0.23, 0.85, 'v2.1.0', '2024-01-27'),
  (3, 'depression_risk', 0.45, 0.88, 'v2.1.0', '2024-01-26');

-- Inserir estudos de pesquisa
INSERT OR IGNORE INTO research_studies (study_code, title, phase, status, enrolled_patients, target_enrollment, start_date, principal_investigator_id) VALUES 
  ('ST001', 'Eficácia da Imunoterapia em Câncer de Pulmão', 'III', 'recruiting', 85, 100, '2023-06-01', 5),
  ('ST002', 'Biomarcadores Preditivos', 'II', 'active', 45, 50, '2023-09-01', 5),
  ('ST003', 'Qualidade de Vida Pós-Radioterapia', 'Observational', 'recruiting', 120, 150, '2023-03-01', 5);

-- Inserir participantes de estudos
INSERT OR IGNORE INTO study_participants (study_id, patient_id, enrollment_date, status) VALUES 
  (1, 1, '2024-01-15', 'active'),
  (3, 2, '2024-01-20', 'screening');