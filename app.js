// ===== Telegram =====
const tg = window.Telegram?.WebApp;
if (tg) { tg.ready(); tg.expand(); tg.setHeaderColor('#0A0A0A'); tg.setBackgroundColor('#0A0A0A'); }

// ===== БАДы =====
const SUPPLEMENTS = [
  { id:'swapx_pro', name:'SwapX Pro', days:30, color:'#B8D4F8' },
  { id:'swapx_neo', name:'SwapX Neo', days:30, color:'#C4E5D9' },
  { id:'molecule_plus', name:'Molecule Plus', days:35, color:'#F8B4C4' },
  { id:'molecule_premium', name:'Molecule Premium', days:23, color:'#E5B8F8' },
  { id:'molecule_ultra', name:'Molecule Ultra', days:30, color:'#D4B8F8' },
  { id:'molecule_zhb', name:'Molecule ЖБ', days:45, color:'#F8D4B8' },
  { id:'berberin', name:'Berberin', days:20, color:'#F8E5B8' },
  { id:'ozempic_pro', name:'Ozempic Pro', days:15, color:'#B8F8D4' },
  { id:'ozempic_turbo', name:'Ozempic Turbo', days:60, color:'#B8F8E5' },
  { id:'slim_complex', name:'Slim Complex', days:30, color:'#E5F8B8' },
  { id:'supressa', name:'Supressa', days:30, color:'#F8B8E5' },
  { id:'mineral_balance', name:'Mineral Balance', days:30, color:'#B8E5F8' }
];

const T = {
  ru:{
    home:'главная',nutrition:'питание',diary:'дневник',progress:'прогресс',
    welcome:'добро пожаловать!',course_in_progress:'курс в процессе',
    weight:'вес',goal:'цель',community:'сообщество',today:'сегодня',
    current_course:'сейчас протекает курс:',mark:'отметить',
    water:'вода',calories:'калории',
    protein:'белки',fat:'жиры',carbs:'углеводы',
    scan_food:'сканировать еду',add_manually:'вручную',todays_meals:'приёмы пищи',
    no_meals_yet:'пока ничего не добавлено',
    how_are_you_today:'как ты сегодня?',mood:'настроение',energy:'энергия',
    sleep_hours:'сон (часов)',sleep:'сон',stress:'стресс',note:'заметка',
    save_report:'сохранить отчёт',
    my_stats:'моя статистика',weight_track:'динамика веса',water_tracker:'трекер воды',
    streak:'серия',avg_sleep:'средний сон',top_10:'топ 10 за неделю',days_short:'дн',
    no_participants:'пока нет участников',
    no_participants_sub:'разреши показ статистики в профиле, чтобы попасть в топ',
    no_data:'нет данных',
    reminders:'напоминания',
    capsule_time_1:'приём капсулы — время 1',
    capsule_time_2:'приём капсулы — время 2 (прочерк, если не нужно)',
    water_time:'приём воды',save_settings:'сохранить настройки',
    appearance:'оформление',theme_pink:'розовая',theme_auto:'авто',theme_light:'светлая',theme_dark:'тёмная',
    privacy:'приватность',show_in_top:'показывать меня в топе',anonymous:'анонимно',
    profile_data:'данные профиля',edit_profile:'редактировать анкету',
    onboard_title:'добро пожаловать!',
    gender:'пол',female:'женский',male:'мужской',
    age:'возраст',height:'рост (см)',weight_kg:'вес (кг)',activity:'активность',
    activity_low:'низкая',activity_light:'лёгкая',activity_mid:'средняя',activity_high:'высокая',
    goal_lose:'похудение',goal_gain:'набор массы',goal_keep:'поддержание формы',
    goal_target:'сколько кг?',supplement:'какой БАД принимаешь?',
    course_start:'дата начала курса',start:'начать',
    add_meal:'добавить приём пищи',meal_name:'название',calories_label:'калории',
    save:'сохранить',scan_done:'сканирование готово',dish:'блюдо',
    portion:'порция',add_to_stats:'добавить в статистику?',yes:'да',no:'нет',
    capsule_intake:'приём капсулы',
    course_done:'курс завершён',
    enter_norm:'Введи свою норму калорий:',
    reset_confirm:'Точно сбросить все данные? Это нельзя отменить.',
    reports:'отчёты'
  },
  en:{
    home:'home',nutrition:'nutrition',diary:'diary',progress:'progress',
    welcome:'welcome!',course_in_progress:'course in progress',
    weight:'weight',goal:'goal',community:'community',today:'today',
    current_course:'current course:',mark:'mark',
    water:'water',calories:'calories',
    protein:'protein',fat:'fat',carbs:'carbs',
    scan_food:'scan food',add_manually:'add manually',todays_meals:'meals',
    no_meals_yet:'nothing added yet',
    how_are_you_today:'how are you today?',mood:'mood',energy:'energy',
sleep_hours:'sleep (hours)',sleep:'sleep',stress:'stress',note:'note',
    save_report:'save report',
    my_stats:'my stats',weight_track:'weight track',water_tracker:'water tracker',
    streak:'streak',avg_sleep:'avg sleep',top_10:'top 10 this week',days_short:'d',
    no_participants:'no participants yet',
    no_participants_sub:'enable stats sharing in profile to join',
    no_data:'no data',
    reminders:'reminders',
    capsule_time_1:'capsule intake — time 1',
    capsule_time_2:'capsule intake — time 2 (dash if not needed)',
    water_time:'water intake',save_settings:'save settings',
    appearance:'appearance',theme_pink:'pink',theme_auto:'auto',theme_light:'light',theme_dark:'dark',
    privacy:'privacy',show_in_top:'show me in top',anonymous:'anonymous',
    profile_data:'profile data',edit_profile:'edit profile',
    onboard_title:'welcome!',
    gender:'gender',female:'female',male:'male',
    age:'age',height:'height (cm)',weight_kg:'weight (kg)',activity:'activity',
    activity_low:'low',activity_light:'light',activity_mid:'medium',activity_high:'high',
    goal_lose:'lose weight',goal_gain:'gain mass',goal_keep:'keep shape',
    goal_target:'how many kg?',supplement:'which supplement?',
    course_start:'course start date',start:'start',
    add_meal:'add meal',meal_name:'name',calories_label:'calories',
    save:'save',scan_done:'scan done',dish:'dish',
    portion:'portion',add_to_stats:'add to stats?',yes:'yes',no:'no',
    capsule_intake:'capsule intake',
    course_done:'course completed',
    enter_norm:'Enter your calorie goal:',
    reset_confirm:'Reset all data? This cannot be undone.',
    reports:'reports'
  }
};
let lang = localStorage.getItem('lang') || 'ru';

function get(k, def) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : def; } catch { return def; } }
function set(k, v) { localStorage.setItem(k, JSON.stringify(v)); }

let profile = get('profile', null);
let meals = get('meals', []);
let water = get('water', 0);
let courseMarks = get('courseMarks', {});
let diaryLog = get('diaryLog', {});
let weightLog = get('weightLog', []);
let waterLog = get('waterLog', {});
let settings = get('settings', { capsuleT1:'09:00', capsuleT2:'—', waterT:'12:00', theme:'pink', showInTop:false, anon:false });

function calcNorm(p) {
  if (p && p.calorieNorm) return p.calorieNorm;
  if (!p || !p.weight || !p.height || !p.age) return 2000;
  const bmr = p.gender === 'male'
    ? 10*p.weight + 6.25*p.height - 5*p.age + 5
    : 10*p.weight + 6.25*p.height - 5*p.age - 161;
  let norm = Math.round(bmr * parseFloat(p.activity || 1.55));
  if (p.goal === 'lose') norm -= 300;
  else if (p.goal === 'gain') norm += 300;
  return norm;
}

// ===== Навигация =====
const screens = document.querySelectorAll('.screen');
const navButtons = document.querySelectorAll('.nav-btn');
const screenTitle = document.getElementById('screenTitle');
const backBtn = document.getElementById('backBtn');
const bottomNav = document.getElementById('bottomNav');

function showScreen(name) {
  screens.forEach(s => s.classList.remove('active'));
  const el = document.getElementById('screen-' + name);
  if (!el) return;
  el.classList.add('active');
  const titleMap = {
    home: T[lang].home, nutrition: T[lang].nutrition, diary: T[lang].diary, progress: T[lang].progress,
    settings: T[lang].reminders,
    'diary-archive': T[lang].reports
  };
  screenTitle.textContent = titleMap[name] || name;
  backBtn.style.display = (name === 'home') ? 'none' : 'flex';
  bottomNav.style.display = ['home','nutrition','diary','progress'].includes(name) ? 'flex' : 'none';
  navButtons.forEach(b => b.classList.toggle('active', b.dataset.screen === name));
}

navButtons.forEach(btn => btn.addEventListener('click', () => {
  showScreen(btn.dataset.screen);
  if (btn.dataset.screen === 'progress') loadCommunity();
}));

// ===== Стрелка: на дневнике — в архив, иначе — на главную =====
backBtn.addEventListener('click', () => {
const active = document.querySelector('.screen.active')?.id?.replace('screen-','');
  if (active === 'diary') showScreen('diary-archive');
  else if (active === 'diary-archive') showScreen('diary');
  else showScreen('home');
});

document.getElementById('dotsBtn').addEventListener('click', () => showScreen('settings'));

document.getElementById('langBtn').addEventListener('click', () => {
  lang = lang === 'ru' ? 'en' : 'ru';
  localStorage.setItem('lang', lang);
  document.getElementById('langBtn').textContent = lang.toUpperCase();
  applyLang();
});

// ===== Онбординг =====
const onboardingModal = document.getElementById('onboardingModal');
const suppSelect = document.getElementById('obSupplement');
SUPPLEMENTS.forEach(s => {
  const opt = document.createElement('option');
  opt.value = s.id; opt.textContent = s.name;
  suppSelect.appendChild(opt);
});

document.getElementById('obGoal').addEventListener('change', e => {
  document.getElementById('goalTargetWrap').style.display = e.target.value === 'keep' ? 'none' : 'block';
});

document.getElementById('saveOnboarding').addEventListener('click', () => {
  const p = {
    gender: document.getElementById('obGender').value,
    age: +document.getElementById('obAge').value,
    height: +document.getElementById('obHeight').value,
    weight: +document.getElementById('obWeight').value,
    activity: document.getElementById('obActivity').value,
    goal: document.getElementById('obGoal').value,
    goalTarget: +document.getElementById('obGoalTarget').value || 0,
    supplement: suppSelect.value,
    courseStart: document.getElementById('obCourseStart').value || new Date().toISOString().slice(0,10),
    calorieNorm: profile?.calorieNorm || null
  };
  if (!p.age || !p.height || !p.weight || !p.supplement) {
    if (tg) tg.showAlert(lang==='ru'?'заполни все поля':'fill all fields');
    return;
  }
  profile = p;
  set('profile', p);
  if (!weightLog.some(w => w.date === p.courseStart)) {
    weightLog.push({ date: p.courseStart, weight: p.weight });
    set('weightLog', weightLog);
  }
  onboardingModal.classList.remove('active');
  updateAll();
  if (tg) tg.HapticFeedback?.notificationOccurred('success');
});

document.getElementById('editProfileBtn').addEventListener('click', () => {
  if (!profile) return;
  document.getElementById('obGender').value = profile.gender;
  document.getElementById('obAge').value = profile.age;
  document.getElementById('obHeight').value = profile.height;
  document.getElementById('obWeight').value = profile.weight;
  document.getElementById('obActivity').value = profile.activity;
  document.getElementById('obGoal').value = profile.goal;
  document.getElementById('obGoalTarget').value = profile.goalTarget || '';
  document.getElementById('goalTargetWrap').style.display = profile.goal === 'keep' ? 'none' : 'block';
  suppSelect.value = profile.supplement;
  document.getElementById('obCourseStart').value = profile.courseStart;
  onboardingModal.classList.add('active');
});

document.getElementById('resetAllBtn').addEventListener('click', () => {
  if (confirm(T[lang].reset_confirm)) {
    localStorage.clear();
    location.reload();
  }
});

// ===== Обновление главной =====
function updateAll() {
  if (!profile) return;
  const supp = SUPPLEMENTS.find(s => s.id === profile.supplement) || SUPPLEMENTS[0];
  const startDate = new Date(profile.courseStart);
  const today = new Date();
  const dayDiff = Math.max(1, Math.floor((today - startDate) / 86400000) + 1);
  const curDay = Math.min(dayDiff, supp.days);
  const pct = Math.round(curDay / supp.days * 100);

  document.getElementById('courseDay').textContent = (lang==='ru'?'день ':'day ') + curDay + (lang==='ru'?' из ':' of ') + supp.days;
  document.getElementById('coursePercent').textContent = pct + '%';
  document.getElementById('courseProgress').style.width = pct + '%';
  document.getElementById('courseStatus').textContent = dayDiff > supp.days ? T[lang].course_done : T[lang].course_in_progress;
document.getElementById('curWeight').textContent = profile.weight || 0;
  let goalText = '—';
  if (profile.goal === 'lose') goalText = '−' + profile.goalTarget + 'кг';
  else if (profile.goal === 'gain') goalText = '+' + profile.goalTarget + 'кг';
  else goalText = lang==='ru'?'поддерж.':'keep';
  document.getElementById('curGoal').textContent = goalText;

  document.getElementById('suppName').textContent = supp.name;
  const ic = document.getElementById('suppIcon');
  ic.style.background = supp.color;
  ic.textContent = supp.name[0];

  let totalKcal=0, totalP=0, totalF=0, totalC=0;
  meals.forEach(m => { totalKcal+=+m.kcal||0; totalP+=+m.protein||0; totalF+=+m.fat||0; totalC+=+m.carbs||0; });
  const norm = calcNorm(profile);
  document.getElementById('calorieNormHome').textContent = norm;
  document.getElementById('calorieNormNutr').textContent = norm;
  document.getElementById('caloriesBig').textContent = totalKcal;
  document.getElementById('caloriesRemaining').textContent = (lang==='ru'?'осталось: ':'remaining: ') + Math.max(0, norm-totalKcal) + (lang==='ru'?' ккал':' kcal');
  const pctC = Math.min(1, totalKcal/norm);
  document.getElementById('calorieCircle').style.strokeDashoffset = 534 * (1 - pctC);
  document.getElementById('proteinVal').textContent = totalP;
  document.getElementById('fatVal').textContent = totalF;
  document.getElementById('carbsVal').textContent = totalC;
  document.getElementById('caloriesCount').textContent = totalKcal;
  document.getElementById('caloriesProgress').style.width = Math.min(100, pctC*100) + '%';

  document.getElementById('waterCount').textContent = (water/1000).toFixed(1);
  document.getElementById('waterProgress').style.width = Math.min(100, water/2000*100) + '%';

  document.getElementById('streakVal').textContent = calcStreak();
  const sleeps = Object.values(diaryLog).map(d => d.sleep).filter(Boolean);
  document.getElementById('avgSleepVal').textContent = sleeps.length ? (sleeps.reduce((a,b)=>a+b,0)/sleeps.length).toFixed(1) + 'ч' : '—';

  updateSupplementCard();
}

document.getElementById('calorieNormNutr').addEventListener('click', () => {
  const current = profile?.calorieNorm || calcNorm(profile) || 2000;
  const val = prompt(T[lang].enter_norm, current);
  if (val && !isNaN(val) && +val > 0) {
    if (!profile) profile = {};
    profile.calorieNorm = +val;
    set('profile', profile);
    updateAll();
  }
});

// ===== Капсула =====
const timeModal = document.getElementById('timeModal');

function updateSupplementCard() {
  const today = new Date().toISOString().slice(0,10);
  const mark = courseMarks[today];
  const btn = document.getElementById('markSupplement');
  if (mark && mark.times && mark.times.length) {
    btn.textContent = mark.times.join(' • ');
    btn.style.background = '#4CAF50';
    btn.style.color = '#fff';
  } else {
    btn.textContent = T[lang].mark;
    btn.style.background = '';
    btn.style.color = '';
  }
}

document.getElementById('markSupplement').addEventListener('click', () => {
  const now = new Date();
  const time = now.toLocaleTimeString('ru-RU', {hour:'2-digit',minute:'2-digit'});
  document.getElementById('timeModalText').textContent = (lang==='ru'?'Отметить приём в ':'Mark intake at ') + time + '?';
  document.getElementById('confirmTime').dataset.time = time;
  timeModal.classList.add('active');
});

document.getElementById('closeTimeModal').addEventListener('click', () => timeModal.classList.remove('active'));
document.getElementById('confirmTime').addEventListener('click', (e) => {
  const today = new Date().toISOString().slice(0,10);
  const time = e.target.dataset.time;
  if (!courseMarks[today]) courseMarks[today] = { times: [] };
  courseMarks[today].times.push(time);
  set('courseMarks', courseMarks);
  timeModal.classList.remove('active');
  updateSupplementCard();
  if (tg) tg.HapticFeedback?.notificationOccurred('success');
});

// ===== Вода =====
document.querySelectorAll('[data-water]').forEach(btn => {
btn.addEventListener('click', () => {
    water += +btn.dataset.water;
    set('water', water);
    const today = new Date().toISOString().slice(0,10);
    waterLog[today] = (waterLog[today]||0) + +btn.dataset.water;
    set('waterLog', waterLog);
    updateAll();
    if (tg) tg.HapticFeedback?.impactOccurred('light');
  });
});

// ===== Питание =====
function renderMeals() {
  const list = document.getElementById('mealsList');
  list.innerHTML = '';
  meals.slice().reverse().forEach((m, ri) => {
    const idx = meals.length - 1 - ri;
    const div = document.createElement('div');
    div.className = 'meal-card';
    div.innerHTML = `
      <div class="meal-emoji">🍽</div>
      <div class="meal-info">
        <div class="meal-name">${m.name||'—'}</div>
        <div class="meal-desc">${m.protein||0}Б · ${m.fat||0}Ж · ${m.carbs||0}У</div>
      </div>
      <div class="meal-kcal">${m.kcal||0} kcal</div>
      <button class="meal-del" data-idx="${idx}">×</button>`;
    list.appendChild(div);
  });
  document.getElementById('emptyMeals').style.display = meals.length ? 'none' : 'block';
  document.querySelectorAll('.meal-del').forEach(btn => {
    btn.addEventListener('click', () => {
      meals.splice(+btn.dataset.idx, 1);
      set('meals', meals);
      renderMeals();
      updateAll();
    });
  });
}

const foodModal = document.getElementById('foodModal');
document.getElementById('addManually').addEventListener('click', () => {
  ['mealName','mealKcal','mealProtein','mealFat','mealCarbs'].forEach(id => document.getElementById(id).value='');
  foodModal.classList.add('active');
});
document.getElementById('closeFoodModal').addEventListener('click', () => foodModal.classList.remove('active'));
foodModal.addEventListener('click', e => { if (e.target === foodModal) foodModal.classList.remove('active'); });

document.getElementById('saveMeal').addEventListener('click', () => {
  const m = {
    name: document.getElementById('mealName').value.trim(),
    kcal: +document.getElementById('mealKcal').value || 0,
    protein: +document.getElementById('mealProtein').value || 0,
    fat: +document.getElementById('mealFat').value || 0,
    carbs: +document.getElementById('mealCarbs').value || 0,
    date: new Date().toISOString()
  };
  if (!m.name && !m.kcal) return;
  meals.push(m); set('meals', meals);
  foodModal.classList.remove('active');
  renderMeals(); updateAll();
  if (tg) tg.HapticFeedback?.notificationOccurred('success');
});

document.getElementById('scanFood').addEventListener('click', () => document.getElementById('foodInput').click());
let lastScan = null;
document.getElementById('foodInput').addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;
  setTimeout(() => {
    lastScan = { name: 'grilled chicken salad', kcal: 450, protein: 35, fat: 18, carbs: 25, portion: 250 };
    document.getElementById('scanName').textContent = lastScan.name;
    document.getElementById('scanKcal').textContent = lastScan.kcal;
    document.getElementById('scanFat').textContent = lastScan.fat;
    document.getElementById('scanCarbs').textContent = lastScan.carbs;
    document.getElementById('scanProtein').textContent = lastScan.protein;
    document.getElementById('scanPortion').textContent = lastScan.portion;
    document.getElementById('scanResultModal').classList.add('active');
  }, 1200);
});

document.getElementById('scanYes').addEventListener('click', () => {
  if (lastScan) {
    meals.push({...lastScan, date: new Date().toISOString()});
    set('meals', meals);
    renderMeals(); updateAll();
  }
  document.getElementById('scanResultModal').classList.remove('active');
  if (tg) tg.HapticFeedback?.notificationOccurred('success');
});
document.getElementById('scanNo').addEventListener('click', () => {
  document.getElementById('scanResultModal').classList.remove('active');
});

// ===== Дневник =====
document.getElementById('energySlider').addEventListener('input', e => document.getElementById('energyVal').textContent = e.target.value);
document.getElementById('sleepSlider').addEventListener('input', e => document.getElementById('sleepVal').textContent = e.target.value);
document.getElementById('stressSlider').addEventListener('input', e => document.getElementById('stressVal').textContent = e.target.value);
document.querySelectorAll('.mood-btn').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('.mood-btn').forEach(x => x.classList.remove('active'));
  b.classList.add('active');
  if (tg) tg.HapticFeedback?.selectionChanged();
}));

document.getElementById('saveDiary').addEventListener('click', () => {
  const today = new Date().toISOString().slice(0,10);
  diaryLog[today] = {
    mood: +(document.querySelector('.mood-btn.active')?.dataset.mood || 3),
    energy: +document.getElementById('energySlider').value,
    sleep: +document.getElementById('sleepSlider').value,
    stress: +document.getElementById('stressSlider').value,
    note: document.getElementById('noteInput').value,
    date: today
  };
  set('diaryLog', diaryLog);
  if (tg) {
    tg.showAlert(lang==='ru'?'отчёт сохранён!':'report saved!');
    tg.HapticFeedback?.notificationOccurred('success');
  } else alert(lang==='ru'?'отчёт сохранён!':'report saved!');
  updateAll();
  if (typeof populateYears === 'function') populateYears();
  if (typeof renderArchive === 'function') renderArchive();
});

// ===== АРХИВ ДНЕВНИКА =====
const filterYear = document.getElementById('filterYear');
const filterMonth = document.getElementById('filterMonth');
const filterDay = document.getElementById('filterDay');
const archiveList = document.getElementById('archiveList');
const emptyArchive = document.getElementById('emptyArchive');

function populateYears() {
  const years = new Set();
  Object.keys(diaryLog).forEach(d => years.add(d.slice(0,4)));
  years.add(String(new Date().getFullYear()));
  const sorted = [...years].sort().reverse();
  filterYear.innerHTML = '<option value="">год — все</option>' +
    sorted.map(y => `<option value="${y}">${y}</option>`).join('');
}

function populateDays() {
  filterDay.innerHTML = '<option value="">день — все</option>';
  for (let i = 1; i <= 31; i++) {
    filterDay.innerHTML += `<option value="${String(i).padStart(2,'0')}">${i}</option>`;
  }
}

function renderArchive() {
  const y = filterYear.value;
  const m = filterMonth.value;
  const d = filterDay.value;

  const entries = Object.entries(diaryLog)
    .filter(([date]) => {
      const [dy, dm, dd] = date.split('-');
      if (y && dy !== y) return false;
      if (m && dm !== String(m).padStart(2,'0')) return false;
      if (d && dd !== d) return false;
      return true;
    })
    .sort((a,b) => b[0].localeCompare(a[0]));

  archiveList.innerHTML = '';
  emptyArchive.style.display = entries.length ? 'none' : 'flex';

  const monthNames = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
  const moodEmoji = {1:'😢',2:'😕',3:'😐',4:'🙂',5:'😄'};

  entries.forEach(([date, data]) => {
    const [dy, dm, dd] = date.split('-');
    const item = document.createElement('div');
    item.className = 'archive-item';
    item.innerHTML = `
      <div class="archive-date">${parseInt(dd)} ${monthNames[parseInt(dm)-1]} ${dy}</div>
      <div class="archive-mood">${moodEmoji[data.mood] || '😐'}</div>
      <div class="archive-row"><span>энергия</span><span>${data.energy||0}/10</span></div>
      <div class="archive-row"><span>сон</span><span>${data.sleep||0} ч</span></div>
      <div class="archive-row"><span>стресс</span><span>${data.stress||0}/10</span></div>
      <div class="archive-note ${data.note ? '' : 'empty'}">${data.note || 'заметки нет'}</div>`;
    archiveList.appendChild(item);
  });
}

filterYear.addEventListener('change', renderArchive);
filterMonth.addEventListener('change', renderArchive);
filterDay.addEventListener('change', renderArchive);

populateYears();
populateDays();

// ===== Прогресс =====
document.getElementById('tabMyStats').addEventListener('click', () => {
  document.getElementById('tabMyStats').classList.add('active');
  document.getElementById('tabCommunity').classList.remove('active');
  document.getElementById('myStatsView').style.display = 'block';
  document.getElementById('communityView').style.display = 'none';
});
document.getElementById('tabCommunity').addEventListener('click', () => {
  document.getElementById('tabCommunity').classList.add('active');
  document.getElementById('tabMyStats').classList.remove('active');
  document.getElementById('myStatsView').style.display = 'none';
  document.getElementById('communityView').style.display = 'block';
  loadCommunity();
});
document.getElementById('communityBtn').addEventListener('click', () => {
  showScreen('progress');
  document.getElementById('tabCommunity').click();
});

async function loadCommunity() {
  const lb = document.getElementById('leaderboard');
  const empty = document.getElementById('emptyLeaderboard');
  const participants = [];
  if (!participants.length) {
    lb.innerHTML = '';
    empty.style.display = 'flex';
    return;
  }
  empty.style.display = 'none';
  lb.innerHTML = '';
  participants.forEach((p, i) => {
    const row = document.createElement('div');
    row.className = 'leader-row' + (i===0?' gold':i===1?' silver':i===2?' bronze':'');
    row.innerHTML = `
      <div class="rank">${i+1}</div>
      ${p.anon ? `<div class="avatar">?</div>` : `<div class="avatar">${(p.name||'?')[0].toLowerCase()}</div>`}
      <div class="leader-info">
        <div class="leader-name">${p.anon ? (lang==='ru'?'анонимный':'anonymous') : p.name}</div>
        <div class="leader-sub">streak ${p.streak} ${lang==='ru'?'дн':'d'}</div>
      </div>
      <div class="leader-progress">${p.progress}kg</div>`;
    lb.appendChild(row);
  });
}

function calcStreak() {
  const dates = new Set();
  Object.keys(diaryLog).forEach(d => dates.add(d));
  Object.keys(waterLog).forEach(d => { if (waterLog[d] > 0) dates.add(d); });
  meals.forEach(m => { if (m.date) dates.add(m.date.slice(0,10)); });
  let streak = 0;
  let d = new Date();
  for (let i=0; i<365; i++) {
    const key = d.toISOString().slice(0,10);
    if (dates.has(key)) streak++;
    else if (i > 0) break;
    d.setDate(d.getDate() - 1);
  }
  return streak;
}

// ===== Баннер =====
document.getElementById('changeBannerBtn').addEventListener('click', () => document.getElementById('bannerInput').click());
document.getElementById('bannerInput').addEventListener('change', e => {
  const file = e.target.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    set('bannerBg', ev.target.result);
    document.getElementById('banner').style.backgroundImage = `url(${ev.target.result})`;
  };
  reader.readAsDataURL(file);
});

// ===== Настройки =====
document.getElementById('capsuleTime1').value = settings.capsuleT1 || '09:00';
document.getElementById('capsuleTime2').value = settings.capsuleT2 || '—';
document.getElementById('waterTime').value = settings.waterT || '12:00';
document.getElementById('showInTop').checked = !!settings.showInTop;
document.getElementById('anonMode').checked = !!settings.anon;

document.getElementById('saveReminders').addEventListener('click', () => {
  settings.capsuleT1 = document.getElementById('capsuleTime1').value;
  settings.capsuleT2 = document.getElementById('capsuleTime2').value || '—';
  settings.waterT = document.getElementById('waterTime').value;
  settings.showInTop = document.getElementById('showInTop').checked;
  settings.anon = document.getElementById('anonMode').checked;
  set('settings', settings);
  if (tg) tg.showAlert(lang==='ru'?'настройки сохранены':'settings saved');
});
document.querySelectorAll('.theme-btn').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('.theme-btn').forEach(x => x.classList.remove('active'));
  b.classList.add('active');
  settings.theme = b.dataset.theme;
  set('settings', settings);
  applyTheme(settings.theme);
}));

function applyTheme(t) {
  if (t === 'pink' || !t) document.documentElement.removeAttribute('data-theme');
  else document.documentElement.setAttribute('data-theme', t);
}

// ===== Язык =====
function applyLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (T[lang][k]) el.textContent = T[lang][k];
  });
  const mi = document.getElementById('mealName');
  if (mi) mi.placeholder = lang==='ru'?'овсянка с ягодами':'oatmeal with berries';
  const ni = document.getElementById('noteInput');
  if (ni) ni.placeholder = lang==='ru'?'добавь заметку...':'add a note...';
  const activeNav = document.querySelector('.nav-btn.active');
  if (activeNav) screenTitle.textContent = T[lang][activeNav.dataset.screen] || '';
  updateSupplementCard();
}

// ===== Init =====
document.getElementById('langBtn').textContent = lang.toUpperCase();
applyTheme(settings.theme || 'pink');
renderMeals();
applyLang();

const savedBg = get('bannerBg', null);
if (savedBg) document.getElementById('banner').style.backgroundImage = `url(${savedBg})`;

if (tg && tg.initDataUnsafe?.user) {
  const u = tg.initDataUnsafe.user;
  document.getElementById('bannerUsername').textContent = u.username ? '@'+u.username : (u.first_name || 'user');
  if (u.photo_url) {
    const av = document.getElementById('bannerAvatar');
    av.style.backgroundImage = `url(${u.photo_url})`;
    av.textContent = '';
  } else {
    document.getElementById('bannerAvatar').textContent = (u.first_name || '?')[0].toUpperCase();
  }
}

if (!profile) {
  onboardingModal.classList.add('active');
  document.getElementById('obCourseStart').value = new Date().toISOString().slice(0,10);
} else {
  updateAll();
}

setInterval(updateAll, 60000);

console.log('mini app loaded');