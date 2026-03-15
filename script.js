/* ============================================
   あつ森 とたけけ楽曲所持チェッカー v1.2 - Script
   ============================================ */

// ---- 全107曲の楽曲データ ----
const SONGS = [
  // あ行
  { ja: "アーバンけけ", kana: "あ" },
  { ja: "アイリッシュそんぐ", kana: "あ" },
  { ja: "アルペンそんぐ", kana: "あ" },
  { ja: "アロハけけ", kana: "あ" },
  { ja: "うたたねのゆめ", kana: "あ" },
  { ja: "エレキそんぐ", kana: "あ" },
  { ja: "おさんぽ", kana: "あ" },
  { ja: "おととい", kana: "あ" },
  { ja: "オンリーミー", kana: "あ" },

  // か行
  { ja: "かんがえちゅう", kana: "か" },
  { ja: "きみのたんじょうび", kana: "か" },
  { ja: "けけアイドル", kana: "か" },
  { ja: "けけアフロ", kana: "か" },
  { ja: "けけウェスタン", kana: "か" },
  { ja: "けけえんか", kana: "か" },
  { ja: "けけおんど", kana: "か" },
  { ja: "けけガムラン", kana: "か" },
  { ja: "けけカリプソ", kana: "か" },
  { ja: "けけカントリー", kana: "か" },
  { ja: "けけグルーヴ", kana: "か" },
  { ja: "けけけいじ", kana: "か" },
  { ja: "けけゴスペル", kana: "か" },
  { ja: "けけサルサ", kana: "か" },
  { ja: "けけサンバ", kana: "か" },
  { ja: "けけさんびか", kana: "か" },
  { ja: "けけジャズ", kana: "か" },
  { ja: "けけショーロ", kana: "か" },
  { ja: "けけじょんがら", kana: "か" },
  { ja: "けけスウィング", kana: "か" },
  { ja: "けけスカ", kana: "か" },
  { ja: "けけスラッキー", kana: "か" },
  { ja: "けけせんせい", kana: "か" },
  { ja: "けけソウル", kana: "か" },
  { ja: "けけソング", kana: "か" },
  { ja: "けけだいみょう", kana: "か" },
  { ja: "けけダブ", kana: "か" },
  { ja: "けけタンゴ", kana: "か" },
  { ja: "けけチャイナ", kana: "か" },
  { ja: "けけディキシー", kana: "か" },
  { ja: "けけディスコ", kana: "か" },
  { ja: "けけトロニカ", kana: "か" },
  { ja: "けけのエチュード", kana: "か" },
  { ja: "けけのソナタ", kana: "か" },
  { ja: "けけのミロンガ", kana: "か" },
  { ja: "けけのロケンロール", kana: "か" },
  { ja: "けけハウス", kana: "か" },
  { ja: "けけハリウッド", kana: "か" },
  { ja: "けけバッシュメント", kana: "か" },
  { ja: "けけバラッド", kana: "か" },
  { ja: "けけパリ", kana: "か" },
  { ja: "けけパレード", kana: "か" },
  { ja: "けけビリー", kana: "か" },
  { ja: "けけファンク", kana: "か" },
  { ja: "けけフーガ", kana: "か" },
  { ja: "けけフュージョン", kana: "か" },
  { ja: "けけフラメンコ", kana: "か" },
  { ja: "けけブルース", kana: "か" },
  { ja: "けけブレイク", kana: "か" },
  { ja: "けけホーミー", kana: "か" },
  { ja: "けけボッサ", kana: "か" },
  { ja: "けけホップ", kana: "か" },
  { ja: "けけポルカ", kana: "か" },
  { ja: "けけボレロ", kana: "か" },
  { ja: "けけマーチ", kana: "か" },
  { ja: "けけマハラジャ", kana: "か" },
  { ja: "けけマリア", kana: "か" },
  { ja: "けけマンボ", kana: "か" },
  { ja: "けけみんよう", kana: "か" },
  { ja: "けけメタル", kana: "か" },
  { ja: "けけラヴァーズ", kana: "か" },
  { ja: "けけラヴソング", kana: "か" },
  { ja: "けけララバイ", kana: "か" },
  { ja: "けけレゲエ", kana: "か" },
  { ja: "けけロイド", kana: "か" },
  { ja: "けけロック", kana: "か" },
  { ja: "けけロマ", kana: "か" },
  { ja: "けけワルツ", kana: "か" },
  { ja: "コサックそんぐ", kana: "か" },
  { ja: "こわいうた", kana: "か" },

  // さ行
  { ja: "さよなら", kana: "さ" },
  { ja: "しょうわけけかよう", kana: "さ" },
  { ja: "セニョールけけ", kana: "さ" },

  // た行
  { ja: "だいすき", kana: "た" },
  { ja: "チルウェイヴ", kana: "た" },
  { ja: "テクノビート", kana: "た" },
  { ja: "どうぶつのしま", kana: "た" },
  { ja: "どうぶつのまち", kana: "た" },
  { ja: "ドライブ", kana: "た" },
  { ja: "ドラムンベース", kana: "た" },
  { ja: "トルコそんぐ", kana: "た" },

  // な行
  { ja: "ナポリタン", kana: "な" },
  { ja: "ナミナミ", kana: "な" },
  { ja: "にだんざか", kana: "な" },
  { ja: "ニューオリンズそんぐ", kana: "な" },

  // は行
  { ja: "ハイサイけけ", kana: "は" },
  { ja: "はるのこもれび", kana: "は" },
  { ja: "ふなうた2001", kana: "は" },
  { ja: "ブルーおにぎり", kana: "は" },
  { ja: "ペルーのうた", kana: "は" },
  { ja: "ほうろう", kana: "は" },
  { ja: "ぼくのばしょ", kana: "は" },

  // ま行
  { ja: "ミニマルおんがく", kana: "ま" },
  { ja: "みんなあつまれ", kana: "ま" },
  { ja: "もりのせいかつ", kana: "ま" },

  // や行
  { ja: "ユーロビート", kana: "や" },
  { ja: "ゆけ！けけライダー", kana: "や" },

  // ら行
  { ja: "ラグタイム", kana: "ら" },
];

// ---- 更新履歴データ ----
const CHANGELOG = [
  {
    version: "v1.2",
    date: "2026/03/15",
    changes: [
      "アルバムアートのプレビュー表示機能を追加",
      "設定画面に「次の曲にスキップ」ボタンを追加",
      "BGM音量バランスを最適化し、より快適なリスニング体験に改善",
      "コンプリート演出時にBGMを自動で抑制し、達成感のあるサウンド体験を実現",
      "曲名通知の表示位置を調整し、UIの視認性を向上",
      "ローディング画面に「はじめる」ボタンを追加し、ブラウザの音声再生制限に対応",
    ],
  },
  {
    version: "v1.1",
    date: "2026/03/15",
    changes: [
      "BGM再生機能を追加（3曲ループ再生）",
      "曲切替時の曲名スライドイン表示を追加",
      "効果音（SE）を追加（チェック / 解除 / コンプリート）",
      "設定画面を追加（BGM / SE の ON/OFF切替）",
      "おしゃれなローディング画面を追加",
      "ローディング画面でLoading BGMを再生",
    ],
  },
  {
    version: "v1.0",
    date: "2026/03/15",
    changes: [
      "初回リリース",
      "全107曲のとたけけ楽曲リスト搭載",
      "チェックボックスによる所持状況管理",
      "ローカルストレージによるデータ自動保存",
      "テキスト検索機能（日本語対応）",
      "所持状態フィルタ（すべて / 所持済 / 未所持）",
      "50音フィルタ（あ行〜わ行・他）",
      "コレクション進捗バー表示",
      "一括選択 / 一括解除機能",
      "アルバムアート画像表示対応",
      "コンプリート時のお祝い演出",
      "スマホ / PC レスポンシブ対応",
    ],
  },
];

// ---- BGM Data ----
const BGM_TRACKS = [
  { file: './music/BGM1.mp3', name: 'Welcome Horizon (Remix) - Qumu' },
  { file: './music/BGM2.mp3', name: 'The Roost (Remix) - Qumu' },
  { file: './music/BGM3.mp3', name: 'Bubblegum K.K. (Remix) - Qumu' },
];

// ---- SE Data ----
const SE_FILES = {
  select: './SE/Select.mp3',
  cancel: './SE/Cancel.mp3',
  complete: './SE/Complete.mp3',
  loading: './SE/Loading.mp3',
};

// ---- Volume Constants ----
const BGM_VOLUME_NORMAL = 0.15;
const BGM_VOLUME_DUCKED = 0.05;
const SE_VOLUME = 0.4;
const LOADING_SE_VOLUME = 0.3;

// ---- Storage Keys ----
const STORAGE_KEY = 'acnh-music-checker-v1';
const SETTINGS_KEY = 'acnh-music-checker-settings';

// ---- State ----
let checkedSongs = loadCheckedSongs();
let currentFilter = {
  search: '',
  status: 'all',
  kana: 'all',
};

// Audio state
let bgmEnabled = true;
let seEnabled = true;
let currentBgmIndex = 0;
let bgmAudio = null;
let bgmToastTimeout = null;
let isBulkAction = false;

// SE audio objects (preload)
const seAudios = {};

// ---- Load Settings ----
function loadSettings() {
  try {
    const data = localStorage.getItem(SETTINGS_KEY);
    if (data) {
      const settings = JSON.parse(data);
      if (typeof settings.bgm === 'boolean') bgmEnabled = settings.bgm;
      if (typeof settings.se === 'boolean') seEnabled = settings.se;
    }
  } catch (e) {
    console.warn('Failed to load settings:', e);
  }
}

function saveSettings() {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify({ bgm: bgmEnabled, se: seEnabled }));
  } catch (e) {
    console.warn('Failed to save settings:', e);
  }
}

// ---- DOM Elements ----
let songGrid, searchInput, searchClear, noResults, songCountInfo;
let progressCurrent, progressTotal, progressBar, progressPercent;

function cacheDOMElements() {
  songGrid = document.getElementById('songGrid');
  searchInput = document.getElementById('searchInput');
  searchClear = document.getElementById('searchClear');
  noResults = document.getElementById('noResults');
  songCountInfo = document.getElementById('songCountInfo');
  progressCurrent = document.getElementById('progressCurrent');
  progressTotal = document.getElementById('progressTotal');
  progressBar = document.getElementById('progressBar');
  progressPercent = document.getElementById('progressPercent');
}

// ================================================================
// LOADING SCREEN
// ================================================================
function initLoadingScreen() {
  const startBtn = document.getElementById('loadingStartBtn');

  startBtn.addEventListener('click', () => {
    startBtn.classList.add('hidden');
    startLoadingProgress();
  });
}

function startLoadingProgress() {
  const loadingBar = document.getElementById('loadingBar');
  const loadingPercent = document.getElementById('loadingPercent');
  const loadingWelcome = document.getElementById('loadingWelcome');
  const loadingScreen = document.getElementById('loadingScreen');
  const appWrapper = document.getElementById('appWrapper');
  const progressArea = document.getElementById('loadingProgressArea');

  // Show progress area
  progressArea.classList.add('visible');

  // Play loading SE (now safe since user clicked)
  let loadingSE = null;
  if (seEnabled) {
    loadingSE = new Audio(SE_FILES.loading);
    loadingSE.volume = LOADING_SE_VOLUME;
    loadingSE.loop = true;
    loadingSE.play().catch(() => {});
  }

  // Pseudo-progress: 0 → 100% in ~5 seconds
  const duration = 5000;
  const startTime = performance.now();

  function updateLoading(time) {
    const elapsed = time - startTime;
    const raw = Math.min(elapsed / duration, 1);
    const eased = raw < 0.5
      ? 4 * raw * raw * raw
      : 1 - Math.pow(-2 * raw + 2, 3) / 2;
    const progress = Math.round(eased * 100);

    loadingBar.style.width = progress + '%';
    loadingPercent.textContent = progress + '%';

    if (progress < 100) {
      requestAnimationFrame(updateLoading);
    } else {
      // 100% reached — fade out loading SE
      if (loadingSE) {
        fadeOutAudio(loadingSE, 600, () => {
          loadingSE.pause();
          loadingSE.currentTime = 0;
        });
      }

      // Show welcome message
      setTimeout(() => {
        loadingWelcome.classList.add('visible');
      }, 200);

      // Transition to main app
      setTimeout(() => {
        loadingScreen.classList.add('fade-out');

        setTimeout(() => {
          loadingScreen.classList.add('hidden');
          appWrapper.classList.add('visible');

          // Start BGM after 1 second
          setTimeout(() => {
            startBGM();
          }, 1000);
        }, 800);
      }, 1600);
    }
  }

  requestAnimationFrame(updateLoading);
}

// ================================================================
// BGM SYSTEM
// ================================================================
function initBGM() {
  bgmAudio = new Audio();
  bgmAudio.volume = BGM_VOLUME_NORMAL;
  bgmAudio.addEventListener('ended', () => {
    currentBgmIndex = (currentBgmIndex + 1) % BGM_TRACKS.length;
    playCurrentBGM();
  });
}

function playCurrentBGM() {
  if (!bgmAudio) return;
  const track = BGM_TRACKS[currentBgmIndex];
  bgmAudio.src = track.file;
  bgmAudio.volume = BGM_VOLUME_NORMAL;
  bgmAudio.play().catch(() => {});
  showBGMToast(track.name);
}

function startBGM() {
  if (!bgmEnabled) return;
  if (!bgmAudio) initBGM();
  currentBgmIndex = 0;
  playCurrentBGM();
}

function stopBGM() {
  if (bgmAudio) {
    bgmAudio.pause();
    bgmAudio.currentTime = 0;
  }
}

function skipBGM() {
  if (!bgmAudio || !bgmEnabled) return;
  currentBgmIndex = (currentBgmIndex + 1) % BGM_TRACKS.length;
  playCurrentBGM();
}

function toggleBGM(enable) {
  bgmEnabled = enable;
  saveSettings();
  if (enable) {
    if (!bgmAudio) initBGM();
    playCurrentBGM();
  } else {
    stopBGM();
  }
}

// ---- BGM Ducking (lower volume during complete SE) ----
function duckBGM() {
  if (!bgmAudio) return;
  smoothVolumeChange(bgmAudio, bgmAudio.volume, BGM_VOLUME_DUCKED, 400);
}

function unduckBGM() {
  if (!bgmAudio) return;
  smoothVolumeChange(bgmAudio, bgmAudio.volume, BGM_VOLUME_NORMAL, 800);
}

function smoothVolumeChange(audio, from, to, duration) {
  const startTime = performance.now();
  const diff = to - from;

  function update(time) {
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    audio.volume = Math.max(0, Math.min(1, from + diff * eased));
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  requestAnimationFrame(update);
}

// ---- BGM Toast ----
function showBGMToast(trackName) {
  const toast = document.getElementById('bgmToast');
  const nameEl = document.getElementById('bgmToastName');

  if (bgmToastTimeout) {
    clearTimeout(bgmToastTimeout);
  }

  toast.classList.remove('visible');

  setTimeout(() => {
    nameEl.textContent = trackName;
    toast.classList.add('visible');

    bgmToastTimeout = setTimeout(() => {
      toast.classList.remove('visible');
    }, 4000);
  }, 100);
}

// ================================================================
// SE SYSTEM
// ================================================================
function preloadSE() {
  for (const [key, file] of Object.entries(SE_FILES)) {
    if (key === 'loading') continue;
    seAudios[key] = new Audio(file);
    seAudios[key].volume = SE_VOLUME;
    seAudios[key].preload = 'auto';
  }
}

function playSE(name) {
  if (!seEnabled) return;
  const audio = seAudios[name];
  if (!audio) return;

  const clone = audio.cloneNode();
  clone.volume = audio.volume;
  clone.play().catch(() => {});

  clone.addEventListener('ended', () => {
    clone.remove();
  });

  return clone;
}

// ---- Audio Utility ----
function fadeOutAudio(audio, duration, callback) {
  const startVol = audio.volume;
  const startTime = performance.now();

  function fade(time) {
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);
    audio.volume = startVol * (1 - progress);
    if (progress < 1) {
      requestAnimationFrame(fade);
    } else {
      audio.volume = 0;
      if (callback) callback();
    }
  }
  requestAnimationFrame(fade);
}

// ================================================================
// ALBUM PREVIEW
// ================================================================
function openAlbumPreview(songName) {
  const overlay = document.getElementById('albumPreviewOverlay');
  const img = document.getElementById('albumPreviewImg');
  const placeholder = document.getElementById('albumPreviewPlaceholder');
  const nameEl = document.getElementById('albumPreviewName');

  nameEl.textContent = songName;

  const imgSrc = `./images/${encodeURIComponent(songName)}.png`;

  // Reset state
  img.classList.remove('hidden');
  placeholder.classList.remove('visible');

  img.onload = () => {
    img.classList.remove('hidden');
    placeholder.classList.remove('visible');
  };

  img.onerror = () => {
    img.classList.add('hidden');
    placeholder.classList.add('visible');
  };

  img.src = imgSrc;
  img.alt = songName;

  overlay.classList.add('active');
}

function closeAlbumPreview() {
  const overlay = document.getElementById('albumPreviewOverlay');
  overlay.classList.remove('active');
}

// ================================================================
// MAIN APP LOGIC
// ================================================================

// ---- Init ----
function init() {
  loadSettings();
  preloadSE();
  cacheDOMElements();
  progressTotal.textContent = SONGS.length;
  renderSongs();
  updateProgress();
  bindEvents();
  renderChangelog();
  updateSettingsUI();
}

// ---- Render Songs ----
function renderSongs() {
  songGrid.innerHTML = '';

  const sortedSongs = [...SONGS].sort((a, b) => a.ja.localeCompare(b.ja, 'ja'));

  sortedSongs.forEach((song, idx) => {
    const isChecked = checkedSongs.has(song.ja);
    const card = document.createElement('div');
    card.className = `song-card${isChecked ? ' checked' : ''}`;
    card.dataset.ja = song.ja;
    card.dataset.kana = song.kana;
    card.style.animationDelay = `${Math.min(idx * 0.03, 1.5)}s`;

    const imgSrc = `./images/${encodeURIComponent(song.ja)}.png`;

    card.innerHTML = `
      <div class="song-jacket" data-song="${song.ja}">
        <img src="${imgSrc}" alt="${song.ja}" loading="lazy"
             onerror="this.parentElement.innerHTML='<div class=\\'jacket-placeholder\\'>🎵</div>'">
      </div>
      <label class="song-checkbox-wrap">
        <input type="checkbox" class="song-checkbox" ${isChecked ? 'checked' : ''}>
        <span class="checkbox-visual">
          <svg viewBox="0 0 24 24"><polyline points="4 12 10 18 20 6"></polyline></svg>
        </span>
      </label>
      <div class="song-info">
        <div class="song-name-ja">${song.ja}</div>
      </div>
    `;

    // Album jacket click → preview
    const jacket = card.querySelector('.song-jacket');
    jacket.addEventListener('click', (e) => {
      e.stopPropagation();
      openAlbumPreview(song.ja);
    });

    // Card click → toggle check
    card.addEventListener('click', (e) => {
      e.preventDefault();
      toggleSong(song.ja, card);
    });

    songGrid.appendChild(card);
  });

  applyFilters();
}

// ---- Toggle Song ----
function toggleSong(songName, card) {
  const checkbox = card.querySelector('.song-checkbox');
  const isNowChecked = !checkedSongs.has(songName);

  if (isNowChecked) {
    checkedSongs.add(songName);
    card.classList.add('checked');
    checkbox.checked = true;
    playSE('select');
  } else {
    checkedSongs.delete(songName);
    card.classList.remove('checked');
    checkbox.checked = false;
    playSE('cancel');
  }

  saveCheckedSongs();
  updateProgress();

  if (checkedSongs.size === SONGS.length && !isBulkAction) {
    celebrate();
  }
}

// ---- Filters ----
function applyFilters() {
  const cards = songGrid.querySelectorAll('.song-card');
  let visibleCount = 0;
  const searchLower = currentFilter.search.toLowerCase();

  cards.forEach(card => {
    const ja = card.dataset.ja;
    const kana = card.dataset.kana;
    const isChecked = checkedSongs.has(ja);
    const jaLower = ja.toLowerCase();

    let show = true;

    if (searchLower && !jaLower.includes(searchLower)) {
      show = false;
    }

    if (currentFilter.status === 'owned' && !isChecked) show = false;
    if (currentFilter.status === 'unowned' && isChecked) show = false;

    if (currentFilter.kana !== 'all' && kana !== currentFilter.kana) show = false;

    if (show) {
      card.classList.remove('hidden');
      visibleCount++;
    } else {
      card.classList.add('hidden');
    }
  });

  songCountInfo.textContent = `${visibleCount} 曲を表示中`;

  if (visibleCount === 0) {
    noResults.classList.add('visible');
  } else {
    noResults.classList.remove('visible');
  }
}

// ---- Progress ----
function updateProgress() {
  const count = checkedSongs.size;
  const total = SONGS.length;
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;

  const currentEl = progressCurrent;
  const oldVal = parseInt(currentEl.textContent) || 0;
  if (oldVal !== count) {
    animateNumber(currentEl, oldVal, count, 300);
  }

  progressBar.style.width = `${pct}%`;
  progressPercent.textContent = `${pct}%`;
}

function animateNumber(el, from, to, duration) {
  const start = performance.now();
  const diff = to - from;

  function update(time) {
    const elapsed = time - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(from + diff * eased);
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// ---- Events ----
function bindEvents() {
  // Search
  searchInput.addEventListener('input', () => {
    currentFilter.search = searchInput.value.trim();
    searchClear.classList.toggle('visible', searchInput.value.length > 0);
    applyFilters();
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    currentFilter.search = '';
    searchClear.classList.remove('visible');
    applyFilters();
    searchInput.focus();
  });

  // Status filter pills
  document.querySelectorAll('.filter-pill[data-status]').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill[data-status]').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentFilter.status = pill.dataset.status;
      applyFilters();
    });
  });

  // Kana filter pills
  document.querySelectorAll('.filter-pill[data-kana]').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill[data-kana]').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentFilter.kana = pill.dataset.kana;
      applyFilters();
    });
  });

  // Bulk actions
  document.getElementById('btnSelectAll').addEventListener('click', () => {
    isBulkAction = true;
    SONGS.forEach(s => checkedSongs.add(s.ja));
    saveCheckedSongs();
    renderSongs();
    updateProgress();
    isBulkAction = false;
  });

  document.getElementById('btnDeselectAll').addEventListener('click', () => {
    isBulkAction = true;
    checkedSongs.clear();
    saveCheckedSongs();
    renderSongs();
    updateProgress();
    isBulkAction = false;
  });

  // Changelog modal
  const btnChangelog = document.getElementById('btnChangelog');
  const changelogOverlay = document.getElementById('changelogOverlay');
  const changelogClose = document.getElementById('changelogClose');

  btnChangelog.addEventListener('click', () => {
    changelogOverlay.classList.add('active');
  });

  changelogClose.addEventListener('click', () => {
    changelogOverlay.classList.remove('active');
  });

  changelogOverlay.addEventListener('click', (e) => {
    if (e.target === changelogOverlay) {
      changelogOverlay.classList.remove('active');
    }
  });

  // Settings modal
  const btnSettings = document.getElementById('btnSettings');
  const settingsOverlay = document.getElementById('settingsOverlay');
  const settingsClose = document.getElementById('settingsClose');

  btnSettings.addEventListener('click', () => {
    settingsOverlay.classList.add('active');
  });

  settingsClose.addEventListener('click', () => {
    settingsOverlay.classList.remove('active');
  });

  settingsOverlay.addEventListener('click', (e) => {
    if (e.target === settingsOverlay) {
      settingsOverlay.classList.remove('active');
    }
  });

  // BGM toggle
  document.getElementById('toggleBGM').addEventListener('click', () => {
    bgmEnabled = !bgmEnabled;
    updateSettingsUI();
    toggleBGM(bgmEnabled);
  });

  // SE toggle
  document.getElementById('toggleSE').addEventListener('click', () => {
    seEnabled = !seEnabled;
    updateSettingsUI();
    saveSettings();
  });

  // Skip track button
  document.getElementById('btnSkipTrack').addEventListener('click', () => {
    skipBGM();
  });

  // Album preview close
  document.getElementById('albumPreviewClose').addEventListener('click', () => {
    closeAlbumPreview();
  });

  document.getElementById('albumPreviewOverlay').addEventListener('click', (e) => {
    if (e.target.id === 'albumPreviewOverlay') {
      closeAlbumPreview();
    }
  });

  // Close modals with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      changelogOverlay.classList.remove('active');
      settingsOverlay.classList.remove('active');
      closeAlbumPreview();
    }
  });
}

// ---- Settings UI ----
function updateSettingsUI() {
  const bgmToggle = document.getElementById('toggleBGM');
  const seToggle = document.getElementById('toggleSE');

  if (bgmEnabled) {
    bgmToggle.classList.add('active');
  } else {
    bgmToggle.classList.remove('active');
  }

  if (seEnabled) {
    seToggle.classList.add('active');
  } else {
    seToggle.classList.remove('active');
  }
}

// ---- Changelog ----
function renderChangelog() {
  const body = document.getElementById('changelogBody');
  body.innerHTML = '';

  CHANGELOG.forEach(entry => {
    const div = document.createElement('div');
    div.className = 'changelog-entry';

    let changesHTML = '';
    entry.changes.forEach(change => {
      changesHTML += `<li>${change}</li>`;
    });

    div.innerHTML = `
      <div class="changelog-version">🏷️ ${entry.version}</div>
      <span class="changelog-date">${entry.date}</span>
      <ul class="changelog-list">${changesHTML}</ul>
    `;

    body.appendChild(div);
  });
}

// ---- Storage ----
function loadCheckedSongs() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      return new Set(JSON.parse(data));
    }
  } catch (e) {
    console.warn('Failed to load saved data:', e);
  }
  return new Set();
}

function saveCheckedSongs() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...checkedSongs]));
  } catch (e) {
    console.warn('Failed to save data:', e);
  }
}

// ---- Celebration ----
function celebrate() {
  // Duck BGM so Complete SE is prominent
  duckBGM();

  // Play Complete SE and unduck BGM when it ends
  const completeSE = playSE('complete');
  if (completeSE) {
    completeSE.addEventListener('ended', () => {
      unduckBGM();
    });
  } else {
    // If SE is disabled, still unduck after a moment
    setTimeout(() => unduckBGM(), 3000);
  }

  const overlay = document.getElementById('celebrationOverlay');
  overlay.classList.add('active');

  // Message
  const msg = document.createElement('div');
  msg.className = 'celebration-message';
  msg.innerHTML = `
    <h3>🎉 コンプリート！ 🎉</h3>
    <p>全${SONGS.length}曲を制覇しました！おめでとう！</p>
  `;
  overlay.appendChild(msg);

  // Confetti
  const colors = ['#5ec576', '#3aaf85', '#f9d74c', '#ff9a9e', '#a8e6cf', '#ffd3b6', '#ffaaa5', '#c0e8ff', '#e0b0ff'];
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-10px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = Math.random() * 2.5 + 's';
    confetti.style.animationDuration = (2.5 + Math.random() * 2) + 's';
    confetti.style.width = (6 + Math.random() * 10) + 'px';
    confetti.style.height = (6 + Math.random() * 10) + 'px';
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '3px';
    overlay.appendChild(confetti);
  }

  setTimeout(() => {
    overlay.classList.remove('active');
    overlay.innerHTML = '';
  }, 5000);
}

// ---- Start ----
document.addEventListener('DOMContentLoaded', () => {
  init();
  initLoadingScreen();
});
