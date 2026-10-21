
        // Snowfall Canvas Effect
        const canvas = document.getElementById('snow-canvas');
        const ctx = canvas ? canvas.getContext('2d') : null;
        let snowflakes = [];

        function resizeCanvas() {
            if (!canvas || !ctx) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            snowflakes = [];
            const count = Math.floor(window.innerWidth / 15);
            for (let i = 0; i < count; i++) {
                snowflakes.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 2.5 + 0.5,
                    density: Math.random() * 0.8 + 0.2,
                    alpha: Math.random() * 0.6 + 0.2
                });
            }
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        function drawSnow() {
            if (!canvas || !ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#38bdf8';
            
            snowflakes.forEach(flake => {
                ctx.globalAlpha = flake.alpha;
                ctx.beginPath();
                ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
                ctx.fill();

                flake.y += flake.density * 0.8;
                flake.x += Math.sin(flake.y * 0.01) * 0.3;

                if (flake.y > canvas.height) {
                    flake.y = -5;
                    flake.x = Math.random() * canvas.width;
                }
            });
            requestAnimationFrame(drawSnow);
        }
        drawSnow();

        // 11 Core Quiz Words
        const targetQuizWords = [
            {
                word: "deliriously",
                phonetic: "/dɪˈlɪr.i.əs.li/",
                partOfSpeech: "adverb",
                meaning: "Super, crazy happy or excited—like winning a big game and jumping up and down!",
                example: ".",
                distractors: ["gaunt", "modest", "methodically"]
            },
            {
                word: "unoccupied",
                phonetic: "/ˌʌnˈɑː.kjə.paɪd/",
                partOfSpeech: "adjective",
                meaning: "Empty or not being used—like a swing at the park when nobody is sitting on it.",
                example: ".",
                distractors: ["plentiful", "arduous", "haste"]
            },
            {
                word: "modest",
                phonetic: "/ˈmɑː.dɪst/",
                partOfSpeech: "adjective",
                meaning: "Not bragging about what you're good at, or keeping things simple instead of flashy.",
                example: ".",
                distractors: ["eternal", "deliriously", "tutelage"]
            },
            {
                word: "methodically",
                phonetic: "/mɪˈθɑː.dɪ.kəl.i/",
                partOfSpeech: "adverb",
                meaning: "Doing something step-by-step in a neat, careful order—like following Lego instructions.",
                example: ".",
                distractors: ["forage", "haste", "gaunt"]
            },
            {
                word: "arduous",
                phonetic: "/ˈɑːr.dʒu.əs/",
                partOfSpeech: "adjective",
                meaning: "Really hard work that takes a lot of effort—like hiking up a huge, steep mountain.",
                example: "",
                distractors: ["plentiful", "unoccupied", "modest"]
            },
            {
                word: "plentiful",
                phonetic: "/ˈplen.tɪ.fəl/",
                partOfSpeech: "adjective",
                meaning: "Having tons of something—like having a big bucket overflowing with candy.",
                example: ".",
                distractors: ["gaunt", "arduous", "tutelage"]
            },
            {
                word: "forage",
                phonetic: "/ˈfɔːr.ɪdʒ/",
                partOfSpeech: "verb",
                meaning: "To hunt around and search for food or supplies—like a squirrel searching for nuts in the woods.",
                example: ".",
                distractors: ["eternal", "methodically", "haste"]
            },
            {
                word: "tutelage",
                phonetic: "/ˈtuː.t̬əl.ɪdʒ/",
                partOfSpeech: "noun",
                meaning: "Learning under the guidance or protection of a teacher or coach who helps you get better.",
                example: ".",
                distractors: ["forage", "modest", "unoccupied"]
            },
            {
                word: "gaunt",
                phonetic: "/ɡɑːnt/",
                partOfSpeech: "adjective",
                meaning: "Looking super skinny and tired, usually because someone was sick or didn't get enough food.",
                example: ".",
                distractors: ["plentiful", "deliriously", "eternal"]
            },
            {
                word: "eternal",
                phonetic: "/ɪˈtɝː.nəl/",
                partOfSpeech: "adjective",
                meaning: "Something that lasts forever and ever, without ever stopping or ending.",
                example: ".",
                distractors: ["haste", "arduous", "methodically"]
            },
            {
                word: "haste",
                phonetic: "/heɪst/",
                partOfSpeech: "noun",
                meaning: "Moving or doing something super fast, usually in a rush—like trying to catch the school bus.",
                example: ".",
                distractors: ["tutelage", "modest", "unoccupied"]
            }
        ];

        // Embedded General Dictionary Dataset
        const generalDictionary = [
            ...targetQuizWords,
            { word: "amber", phonetic: "/ˈæm.bɚ/", partOfSpeech: "noun", meaning: "A hard clear yellowish-brown gum that comes from ancient trees.", example: "The necklace was made of shiny amber beads." },
            { word: "benevolent", phonetic: "/bəˈnev.əl.ənt/", partOfSpeech: "adjective", meaning: "Kind, generous, and caring toward other people.", example: "The king was a benevolent ruler loved by all." },
            { word: "brave", phonetic: "/breɪv/", partOfSpeech: "adjective", meaning: "Showing courage and not being afraid in difficult times.", example: "The brave firefighter rescued the kitten." },
            { word: "cosmic", phonetic: "/ˈkɑːz.mɪk/", partOfSpeech: "adjective", meaning: "Relating to the universe, outer space, and stars.", example: "The astronaut gazed at the cosmic dust floating through space." },
            { word: "dazzle", phonetic: "/ˈdæz.əl/", partOfSpeech: "verb", meaning: "To amaze or impress someone greatly with skill or brightness.", example: "Her incredible piano performance dazzled the entire audience." },
            { word: "echo", phonetic: "/ˈek.oʊ/", partOfSpeech: "noun", meaning: "A sound that reflects back off a wall or mountain and is heard again.", example: "Her voice created an echo in the empty cave." },
            { word: "formidable", phonetic: "/fɔːrˈmɪd.ə.bəl/", partOfSpeech: "adjective", meaning: "Inspiring respect or fear because of being very powerful or impressive.", example: "The defending champions were a formidable team." },
            { word: "glistening", phonetic: "/ˈɡlɪs.ən.ɪŋ/", partOfSpeech: "adjective", meaning: "Shining with a sparkling light, like morning wet snow.", example: "The morning dew was glistening on the grass." },
            { word: "harmony", phonetic: "/ˈhɑːr.mə.ni/", partOfSpeech: "noun", meaning: "A pleasing combination or peaceful agreement between things.", example: "The singers sang together in beautiful harmony." },
            { word: "ignite", phonetic: "/ɪɡˈnaɪt/", partOfSpeech: "verb", meaning: "To catch fire or cause something to start burning.", example: "The spark helped ignite the campfire." },
            { word: "jubilant", phonetic: "/ˈdʒuː.bəl.ənt/", partOfSpeech: "adjective", meaning: "Feeling or expressing great joy and triumph.", example: "The crowd was jubilant when the team won the championship." },
            { word: "keen", phonetic: "/kiːn/", partOfSpeech: "adjective", meaning: "Having a sharp mind, quick understanding, or sharp sight.", example: "An eagle has keen eyesight to spot prey from high above." },
            { word: "luminous", phonetic: "/ˈluː.mə.nəs/", partOfSpeech: "adjective", meaning: "Giving off bright light, especially in the dark.", example: "The fireflies created a luminous glow in the forest." },
            { word: "majestic", phonetic: "/məˈdʒes.tɪk/", partOfSpeech: "adjective", meaning: "Grand, impressive, and beautiful like royalty.", example: "The snow-capped mountains looked majestic at sunrise." },
            { word: "nebula", phonetic: "/ˈneb.jə.lə/", partOfSpeech: "noun", meaning: "A giant cloud of dust and gas floating in outer space.", example: "Scientists spotted a colorful nebula through the space telescope." },
            { word: "oasis", phonetic: "/oʊˈeɪ.sɪs/", partOfSpeech: "noun", meaning: "A fertile spot in a desert where water is found.", example: "Travelers rested near the green oasis in the hot desert." },
            { word: "pristine", phonetic: "/ˈprɪs.tiːn/", partOfSpeech: "adjective", meaning: "Fresh, clean, and in original perfect condition.", example: "The beach had pristine white sand and crystal clear water." },
            { word: "quaint", phonetic: "/kweɪnt/", partOfSpeech: "adjective", meaning: "Charming, attractive, and old-fashioned in a pleasing way.", example: "They visited a quaint little village with cobblestone streets." },
            { word: "resilient", phonetic: "/rɪˈzɪl.jənt/", partOfSpeech: "adjective", meaning: "Able to withstand or recover quickly from tough conditions.", example: "The resilient plant grew back after the storm." },
            { word: "serene", phonetic: "/səˈriːn/", partOfSpeech: "adjective", meaning: "Calm, peaceful, and untroubled.", example: "The lake was completely serene in the quiet morning." },
            { word: "triumphant", phonetic: "/traɪˈʌm.fənt/", partOfSpeech: "adjective", meaning: "Having won a victory or battle, feeling victorious.", example: "The players raised their hands in a triumphant cheer." },
            { word: "unwavering", phonetic: "/ʌnˈweɪ.vɚ.ɪŋ/", partOfSpeech: "adjective", meaning: "Firm and steady; not shaking or giving up.", example: "Her unwavering focus helped her complete the challenge." },
            { word: "vibrant", phonetic: "/ˈvaɪ.brənt/", partOfSpeech: "adjective", meaning: "Full of energy, life, and bright colors.", example: "The tropical fish had bright and vibrant colors." },
            { word: "wisdom", phonetic: "/ˈwɪz.dəm/", partOfSpeech: "noun", meaning: "Having experience, knowledge, and good judgment.", example: "The old teacher shared her wisdom with the students." },
            { word: "zenith", phonetic: "/ˈzeː.nɪθ/", partOfSpeech: "noun", meaning: "The highest point or peak reached by something.", example: "At noon, the sun reaches its zenith in the sky." }
        ].sort((a, b) => a.word.localeCompare(b.word)).filter((item, index, all) => all.findIndex(other => other.word.toLowerCase() === item.word.toLowerCase()) === index);

        // Safe helpers for user-provided quiz content and browser storage.
        function escapeHTML(value) {
            return String(value ?? '').replace(/[&<>"']/g, char => ({
                '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
            })[char]);
        }

        function safeStorageGet(key) {
            try { return window.localStorage.getItem(key); } catch (_) { return null; }
        }

        function safeStorageSet(key, value) {
            try { window.localStorage.setItem(key, value); return true; } catch (_) { return false; }
        }

        function normalizeQuestion(raw) {
            if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null;
            const word = typeof raw.word === 'string' ? raw.word.trim().slice(0, 100) : '';
            const meaning = typeof raw.meaning === 'string' ? raw.meaning.trim().slice(0, 1000) : '';
            if (!word || !meaning) return null;
            const supplied = Array.isArray(raw.distractors) ? raw.distractors : [];
            const distractors = [];
            const seen = new Set([word.toLocaleLowerCase()]);
            for (const candidate of supplied) {
                if (typeof candidate !== 'string') continue;
                const clean = candidate.trim().slice(0, 100);
                const key = clean.toLocaleLowerCase();
                if (clean && !seen.has(key)) { seen.add(key); distractors.push(clean); }
                if (distractors.length === 3) break;
            }
            for (const candidate of generalDictionary.map(item => item.word).concat(['option 1','option 2','option 3'])) {
                const key = candidate.toLocaleLowerCase();
                if (distractors.length >= 3) break;
                if (!seen.has(key)) { seen.add(key); distractors.push(candidate); }
            }
            return { ...raw, word, meaning, distractors };
        }

        function normalizeQuiz(raw, usedIds = new Set()) {
            if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null;
            const title = typeof raw.title === 'string' ? raw.title.trim().slice(0, 80) : '';
            if (!title || !Array.isArray(raw.words) || raw.words.length < 1 || raw.words.length > 200) return null;
            const words = raw.words.map(normalizeQuestion);
            if (words.some(item => !item)) return null;
            const requestedId = typeof raw.id === 'string' && /^[a-zA-Z0-9_-]{1,80}$/.test(raw.id) ? raw.id : '';
            let id = requestedId && requestedId !== 'default' && !usedIds.has(requestedId) ? requestedId : '';
            if (!id) { do { id = 'custom_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 9); } while (usedIds.has(id)); }
            usedIds.add(id);
            return { id, title, words };
        }

        // MAIN APPLICATION CLASS
        class VocabMasterApp {
            constructor() {
                this.defaultQuiz = {
                    id: 'default',
                    title: 'Upcoming Quiz Vocab',
                    words: targetQuizWords
                };

                this.customQuizzes = this.loadSavedCustomQuizzes();
                this.activeQuizId = 'default';
                this.quizData = this.defaultQuiz.words;
                this.currentIndex = 0;
                this.score = 0;
                this.answered = false;
                this.spellingWords = [];
                this.spellingIndex = 0;
                this.spellingScore = 0;
                this.spellingAnswered = false;

                // Builder Temporary State
                this.builderState = {
                    editingId: null,
                    questions: []
                };

                this.initUI();
                this.initSettings();
                this.renderUpcomingWords();
                this.updateQuizDropdown();
                this.renderCustomQuizList();
                this.loadActiveQuiz();
            }

            initUI() {
                this.sections = {
                    quiz: document.getElementById('section-quiz'),
                    custom: document.getElementById('section-custom'),
                    upcoming: document.getElementById('section-upcoming'),
                    spelling: document.getElementById('section-spelling')
                };

                this.tabs = {
                    quiz: document.getElementById('tab-quiz'),
                    custom: document.getElementById('tab-custom'),
                    upcoming: document.getElementById('tab-upcoming'),
                    spelling: document.getElementById('tab-spelling')
                };

                this.quizScreens = {
                    start: document.getElementById('start-screen'),
                    quiz: document.getElementById('quiz-screen'),
                    results: document.getElementById('results-screen')
                };

                this.quizElements = {
                    questionCount: document.getElementById('question-count'),
                    scoreTracker: document.getElementById('score-tracker'),
                    progressBar: document.getElementById('progress-bar'),
                    meaningText: document.getElementById('meaning-text'),
                    blankDisplay: document.getElementById('blank-display'),
                    optionsGrid: document.getElementById('options-grid'),
                    feedbackText: document.getElementById('feedback-text'),
                    nextBtn: document.getElementById('next-btn')
                };
            }

            switchTab(targetTab) {
                // This app also runs on separate HTML pages, where most sections
                // and in-page tab buttons intentionally do not exist.
                Object.keys(this.sections).forEach(key => {
                    const section = this.sections[key];
                    const tab = this.tabs[key];
                    if (section) section.classList.add('hidden');
                    if (tab) tab.className = 'px-3 py-1.5 rounded-lg text-slate-400 hover:text-white transition flex items-center gap-1.5';
                });

                if (this.sections[targetTab]) this.sections[targetTab].classList.remove('hidden');
                if (this.tabs[targetTab]) this.tabs[targetTab].className = 'px-3 py-1.5 rounded-lg text-sky-400 bg-slate-800 transition flex items-center gap-1.5';
            }

            // LOCAL STORAGE FOR CUSTOM QUIZZES
            loadSavedCustomQuizzes() {
                try {
                    const saved = safeStorageGet('vocab_mastr_custom_quizzes');
                    const parsed = saved ? JSON.parse(saved) : [];
                    if (!Array.isArray(parsed)) return [];
                    const usedIds = new Set();
                    return parsed.map(q => normalizeQuiz(q, usedIds)).filter(Boolean);
                } catch (e) {
                    console.warn('Saved quizzes could not be loaded:', e);
                    return [];
                }
            }

            saveCustomQuizzesToStorage() {
                if (!safeStorageSet('vocab_mastr_custom_quizzes', JSON.stringify(this.customQuizzes))) {
                    alert('Your browser could not save the quizzes. Storage may be disabled or full. Export your quizzes as a backup.');
                }
                this.updateQuizDropdown();
                this.renderCustomQuizList();
            }

            updateQuizDropdown() {
                const select = document.getElementById('quiz-select-dropdown');
                if (!select) return;
                select.innerHTML = '<option value="default">Upcoming Quiz Vocab (11 Words)</option>';

                this.customQuizzes.forEach(quiz => {
                    const opt = document.createElement('option');
                    opt.value = quiz.id;
                    opt.textContent = `${escapeHTML(quiz.title)} (${quiz.words.length} Questions)`;
                    select.appendChild(opt);
                });

                select.value = this.activeQuizId;
            }

            selectActiveQuiz(id) {
                this.activeQuizId = id;
                this.loadActiveQuiz();
            }

            resetToDefaultQuiz() {
                this.activeQuizId = 'default';
                this.updateQuizDropdown();
                this.loadActiveQuiz();
            }

            loadActiveQuiz() {
                if (this.activeQuizId === 'default') {
                    this.quizData = this.defaultQuiz.words;
                    const titleEl = document.getElementById('active-quiz-title');
                    const descEl = document.getElementById('active-quiz-desc');
                    if (titleEl) titleEl.textContent = "Vocabulary Quiz";
                    if (descEl) descEl.textContent = "Test your knowledge using multiple choice options and sentence blanks.";
                } else {
                    const found = this.customQuizzes.find(q => q.id === this.activeQuizId);
                    if (found) {
                        this.quizData = found.words;
                        const titleEl = document.getElementById('active-quiz-title');
                        const descEl = document.getElementById('active-quiz-desc');
                        if (titleEl) titleEl.textContent = found.title;
                        if (descEl) descEl.textContent = `Custom quiz with ${found.words.length} questions.`;
                    } else {
                        this.activeQuizId = 'default';
                        this.quizData = this.defaultQuiz.words;
                        const titleEl = document.getElementById('active-quiz-title');
                        const descEl = document.getElementById('active-quiz-desc');
                        if (titleEl) titleEl.textContent = "Vocabulary Quiz";
                        if (descEl) descEl.textContent = "Test your knowledge using multiple choice options and sentence blanks.";
                    }
                }

                // Update target badges
                const container = document.getElementById('word-badges-container');
                if (!container) return;
                container.innerHTML = '';
                this.quizData.forEach(item => {
                    const badge = document.createElement('span');
                    badge.className = 'bg-slate-900/90 px-2.5 py-1 rounded-lg border border-slate-800 text-xs font-medium text-slate-300';
                    badge.textContent = item.word;
                    container.appendChild(badge);
                });

                if (this.quizScreens.start && this.quizScreens.quiz && this.quizScreens.results) this.showQuizScreen('start');
            }

            // CUSTOM QUIZ BUILDER METHODS
            openNewQuizBuilder() {
                this.builderState = { editingId: null, questions: [] };
                document.getElementById('quiz-title-input').value = '';
                document.getElementById('builder-title').innerHTML = `<i class="fa-solid fa-pen-to-square text-sky-400"></i> Create New Quiz`;
                this.clearQuestionInputs();
                this.renderBuilderQuestions();
                document.getElementById('quiz-builder-card').classList.remove('hidden');
            }

            toggleQuizBuilder(show) {
                const card = document.getElementById('quiz-builder-card');
                if (show) {
                    this.openNewQuizBuilder();
                } else {
                    card.classList.add('hidden');
                }
            }

            clearQuestionInputs() {
                document.getElementById('q-word-input').value = '';
                document.getElementById('q-d1-input').value = '';
                document.getElementById('q-d2-input').value = '';
                document.getElementById('q-d3-input').value = '';
                document.getElementById('q-meaning-input').value = '';
            }

            autoFillDistractors() {
                const currentWord = document.getElementById('q-word-input').value.trim().toLowerCase();
                const otherWords = generalDictionary
                    .map(item => item.word)
                    .filter(w => w.toLowerCase() !== currentWord)
                    .sort(() => Math.random() - 0.5);

                if (otherWords.length >= 3) {
                    document.getElementById('q-d1-input').value = otherWords[0];
                    document.getElementById('q-d2-input').value = otherWords[1];
                    document.getElementById('q-d3-input').value = otherWords[2];
                }
            }

            addBuilderQuestion() {
                const word = document.getElementById('q-word-input').value.trim();
                let d1 = document.getElementById('q-d1-input').value.trim();
                let d2 = document.getElementById('q-d2-input').value.trim();
                let d3 = document.getElementById('q-d3-input').value.trim();
                const meaning = document.getElementById('q-meaning-input').value.trim();

                if (!word || !meaning) {
                    alert("Please provide at least the target word and the question prompt/meaning!");
                    return;
                }

                // If distractors are missing, auto-fill them from dictionary
                if (!d1 || !d2 || !d3) {
                    const fallbackDistractors = generalDictionary
                        .map(item => item.word)
                        .filter(w => w.toLowerCase() !== word.toLowerCase())
                        .sort(() => Math.random() - 0.5);

                    if (!d1) d1 = fallbackDistractors[0] || 'apple';
                    if (!d2) d2 = fallbackDistractors[1] || 'banana';
                    if (!d3) d3 = fallbackDistractors[2] || 'orange';
                }

                this.builderState.questions.push({
                    word,
                    meaning,
                    distractors: [d1, d2, d3]
                });

                this.clearQuestionInputs();
                this.renderBuilderQuestions();
            }

            removeBuilderQuestion(index) {
                this.builderState.questions.splice(index, 1);
                this.renderBuilderQuestions();
            }

            renderBuilderQuestions() {
                document.getElementById('builder-q-count').textContent = this.builderState.questions.length;
                const container = document.getElementById('builder-questions-preview');
                container.innerHTML = '';

                this.builderState.questions.forEach((q, idx) => {
                    const div = document.createElement('div');
                    div.className = 'flex items-center justify-between p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs';
                    div.innerHTML = `
                        <div class="truncate mr-2">
                            <span class="font-bold text-sky-400 font-mono">${escapeHTML(q.word)}</span>
                            <span class="text-slate-400 text-[11px] block truncate">${escapeHTML(q.meaning)}</span>
                        </div>
                        <button onclick="app.removeBuilderQuestion(${idx})" class="text-red-400 hover:text-red-300 p-1">
                            <i class="fa-solid fa-trash-can text-xs"></i>
                        </button>
                    `;
                    container.appendChild(div);
                });
            }

            saveCustomQuiz() {
                const title = document.getElementById('quiz-title-input').value.trim().slice(0, 80);
                if (!title) {
                    alert("Please enter a quiz title!");
                    return;
                }
                if (this.builderState.questions.length === 0) {
                    alert("Please add at least one question!");
                    return;
                }
                if (this.builderState.questions.length > 200) {
                    alert('A quiz can contain at most 200 questions.');
                    return;
                }

                if (this.builderState.editingId) {
                    const idx = this.customQuizzes.findIndex(q => q.id === this.builderState.editingId);
                    if (idx !== -1) {
                        this.customQuizzes[idx].title = title;
                        this.customQuizzes[idx].words = this.builderState.questions.map(normalizeQuestion).filter(Boolean);
                    }
                } else {
                    const newQuiz = {
                        id: 'custom_' + Date.now(),
                        title,
                        words: this.builderState.questions.map(normalizeQuestion).filter(Boolean)
                    };
                    this.customQuizzes.push(newQuiz);
                }

                this.saveCustomQuizzesToStorage();
                this.toggleQuizBuilder(false);
            }

            editQuiz(id) {
                const quiz = this.customQuizzes.find(q => q.id === id);
                if (!quiz) return;

                this.builderState = {
                    editingId: id,
                    questions: JSON.parse(JSON.stringify(quiz.words))
                };

                document.getElementById('quiz-title-input').value = quiz.title;
                document.getElementById('builder-title').innerHTML = `<i class="fa-solid fa-pen-to-square text-sky-400"></i> Edit Quiz`;
                this.clearQuestionInputs();
                this.renderBuilderQuestions();
                document.getElementById('quiz-builder-card').classList.remove('hidden');
            }

            deleteQuiz(id) {
                if (confirm("Are you sure you want to delete this custom quiz?")) {
                    this.customQuizzes = this.customQuizzes.filter(q => q.id !== id);
                    if (this.activeQuizId === id) {
                        this.resetToDefaultQuiz();
                    } else {
                        this.saveCustomQuizzesToStorage();
                    }
                }
            }

            renderCustomQuizList() {
                const container = document.getElementById('custom-quiz-list');
                if (!container) return;
                container.innerHTML = '';

                if (this.customQuizzes.length === 0) {
                    container.innerHTML = `
                        <div class="p-4 rounded-xl border border-dashed border-slate-800 text-center text-xs text-slate-500">
                            No custom quizzes created yet. Click "New Quiz" to make your own!
                        </div>
                    `;
                    return;
                }

                this.customQuizzes.forEach(quiz => {
                    const card = document.createElement('div');
                    card.className = 'flex items-center justify-between p-3.5 bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-xl transition';
                    card.innerHTML = `
                        <div>
                            <h4 class="text-xs font-bold text-white">${escapeHTML(quiz.title)}</h4>
                            <span class="text-[10px] text-slate-400 font-mono">${quiz.words.length} Questions</span>
                        </div>
                        <div class="flex items-center gap-1.5">
                            <button onclick="app.playCustomQuizDirect('${escapeHTML(quiz.id)}')" class="px-2.5 py-1 bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 rounded-lg text-xs font-semibold transition" title="Play Now">
                                <i class="fa-solid fa-play text-[10px] mr-1"></i> Play
                            </button>
                            <button onclick="app.editQuiz('${escapeHTML(quiz.id)}')" class="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs transition" title="Edit">
                                <i class="fa-solid fa-pen text-xs"></i>
                            </button>
                            <button onclick="app.deleteQuiz('${escapeHTML(quiz.id)}')" class="p-1.5 bg-slate-800 hover:bg-red-950/50 text-red-400 rounded-lg text-xs transition" title="Delete">
                                <i class="fa-solid fa-trash-can text-xs"></i>
                            </button>
                        </div>
                    `;
                    container.appendChild(card);
                });
            }

            playCustomQuizDirect(id) {
                this.selectActiveQuiz(id);
                this.switchTab('quiz');
                this.startQuiz();
            }

            exportQuizzes() {
                if (this.customQuizzes.length === 0) {
                    alert("No custom quizzes to export!");
                    return;
                }
                const blob = new Blob([JSON.stringify(this.customQuizzes, null, 2)], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const downloadAnchor = document.createElement('a');
                downloadAnchor.href = url;
                downloadAnchor.download = 'vocab_mastr_quizzes.json';
                document.body.appendChild(downloadAnchor);
                downloadAnchor.click();
                downloadAnchor.remove();
                URL.revokeObjectURL(url);
            }

            importQuizzes(event) {
                const file = event.target.files && event.target.files[0];
                if (!file) return;
                if (file.size > 2 * 1024 * 1024) {
                    alert('That quiz file is too large. Please import a JSON file under 2 MB.');
                    event.target.value = '';
                    return;
                }
                const reader = new FileReader();
                reader.onload = (e) => {
                    try {
                        const imported = JSON.parse(e.target.result);
                        if (!Array.isArray(imported) || imported.length > 100) throw new Error('Invalid quiz list');
                        const usedIds = new Set(this.customQuizzes.map(q => q.id));
                        const formatted = imported.map(q => normalizeQuiz(q, usedIds));
                        if (!formatted.length || formatted.some(q => !q)) throw new Error('Invalid quiz contents');
                        this.customQuizzes = [...this.customQuizzes, ...formatted];
                        this.saveCustomQuizzesToStorage();
                        alert(`Imported ${formatted.length} quiz${formatted.length === 1 ? '' : 's'} successfully.`);
                    } catch (err) {
                        alert('This file is not a valid VOCAB MASTR quiz export. Check that each quiz has a title and at least one valid question.');
                    } finally {
                        event.target.value = '';
                    }
                };
                reader.onerror = () => { alert('Could not read the selected file.'); event.target.value = ''; };
                reader.readAsText(file);
            }

            // SPEECH SYNTHESIS ENGINE
            speakWord(text) {
                if ('speechSynthesis' in window && typeof SpeechSynthesisUtterance !== 'undefined') {
                    window.speechSynthesis.cancel();
                    const utterance = new SpeechSynthesisUtterance(text);
                    utterance.rate = 0.9;
                    utterance.pitch = 1.0;
                    window.speechSynthesis.speak(utterance);
                } else {
                    alert('Speech playback is not supported in this browser.');
                }
            }

            // SETTINGS & BACKGROUND SYSTEM
            initSettings() {
                const savedCustomBg = safeStorageGet('vocab_mastr_custom_bg');
                const savedPreset = safeStorageGet('vocab_mastr_preset_bg') || 'snow';

                if (savedCustomBg) {
                    this.applyCustomBg(savedCustomBg);
                } else {
                    this.setBackground(savedPreset, false);
                }
            }

            openSettings() {
                const modal = document.getElementById('settings-modal');
                if (modal) modal.classList.remove('hidden');
            }

            closeSettings() {
                const modal = document.getElementById('settings-modal');
                if (modal) modal.classList.add('hidden');
            }

            setBackground(preset, save = true) {
                if (!['snow', 'space', 'cyber', 'carbon'].includes(preset)) preset = 'snow';
                if (save) {
                    try { localStorage.removeItem('vocab_mastr_custom_bg'); } catch (_) {}
                    if (!safeStorageSet('vocab_mastr_preset_bg', preset)) alert('Could not save this background preference in browser storage.');
                }

                document.body.style.backgroundImage = 'none';
                const clearBtn = document.getElementById('clear-custom-bg');
                if (clearBtn) clearBtn.classList.add('hidden');

                const canvasEl = document.getElementById('snow-canvas');

                if (preset === 'snow') {
                    if (canvasEl) canvasEl.style.display = 'block';
                    document.body.style.backgroundColor = '#060b13';
                } else {
                    if (canvasEl) canvasEl.style.display = 'none';
                    if (preset === 'space') {
                        document.body.style.backgroundColor = '#0b0714';
                        document.body.style.backgroundImage = 'radial-gradient(circle at 50% 30%, #2e1065 0%, #0b0714 80%)';
                    } else if (preset === 'cyber') {
                        document.body.style.backgroundColor = '#030a16';
                        document.body.style.backgroundImage = 'radial-gradient(circle at 50% 50%, #0284c7 0%, #030a16 70%)';
                    } else if (preset === 'carbon') {
                        document.body.style.backgroundColor = '#090d16';
                        document.body.style.backgroundImage = 'linear-gradient(180deg, #0f172a 0%, #020617 100%)';
                    }
                }

                document.querySelectorAll('.preset-btn').forEach(btn => {
                    if (btn.dataset.preset === preset && !safeStorageGet('vocab_mastr_custom_bg')) {
                        btn.classList.add('!border-sky-400', '!bg-sky-950/40');
                    } else {
                        btn.classList.remove('!border-sky-400', '!bg-sky-950/40');
                    }
                });
            }

            handleBgUpload(event) {
                const file = event.target.files && event.target.files[0];
                if (!file) return;
                if (!['image/png', 'image/jpeg', 'image/webp', 'image/gif'].includes(file.type)) { alert('Please choose a PNG, JPEG, WebP, or GIF image.'); event.target.value = ''; return; }
                if (file.size > 2 * 1024 * 1024) { alert('Please choose an image smaller than 2 MB.'); event.target.value = ''; return; }
                const reader = new FileReader();
                reader.onload = (e) => {
                    const base64Img = e.target.result;
                    if (typeof base64Img !== 'string' || !/^data:image\/(png|jpeg|webp|gif);base64,/i.test(base64Img)) { alert('That image could not be loaded.'); return; }
                    if (!safeStorageSet('vocab_mastr_custom_bg', base64Img)) {
                        alert('Browser storage is full or unavailable. Choose a smaller image or clear the saved background.');
                        return;
                    }
                    this.applyCustomBg(base64Img);
                    event.target.value = '';
                };
                reader.onerror = () => alert('Could not read that image file.');
                reader.readAsDataURL(file);
            }

            applyCustomBg(base64Img) {
                const canvasEl = document.getElementById('snow-canvas');
                if (canvasEl) canvasEl.style.display = 'none';
                document.body.style.backgroundImage = `url("${base64Img}")`;
                document.body.style.backgroundSize = 'cover';
                document.body.style.backgroundPosition = 'center';
                document.body.style.backgroundAttachment = 'fixed';
                const clearBtn = document.getElementById('clear-custom-bg');
                if (clearBtn) clearBtn.classList.remove('hidden');

                document.querySelectorAll('.preset-btn').forEach(btn => {
                    btn.classList.remove('!border-sky-400', '!bg-sky-950/40');
                });
            }

            clearCustomBg() {
                try { localStorage.removeItem('vocab_mastr_custom_bg'); } catch (_) {}
                this.setBackground('snow');
            }

            // QUIZ ENGINE
            showQuizScreen(name) {
                Object.keys(this.quizScreens).forEach(key => this.quizScreens[key].classList.add('hidden'));
                this.quizScreens[name].classList.remove('hidden');
            }

            startQuiz() {
                if (!this.quizData || this.quizData.length === 0) {
                    alert("This quiz has no questions!");
                    return;
                }
                this.quizData = [...this.quizData].sort(() => Math.random() - 0.5);
                this.currentIndex = 0;
                this.score = 0;
                this.showQuizScreen('quiz');
                this.loadQuestion();
            }

            loadQuestion() {
                this.answered = false;
                const current = this.quizData[this.currentIndex];

                this.quizElements.questionCount.textContent = `Question ${this.currentIndex + 1} of ${this.quizData.length}`;
                this.quizElements.scoreTracker.textContent = `Score: ${this.score}`;

                const progressPct = ((this.currentIndex) / this.quizData.length) * 100;
                this.quizElements.progressBar.style.width = `${progressPct}%`;

                this.quizElements.meaningText.textContent = `"${current.meaning}"`;
                this.quizElements.blankDisplay.textContent = "?";
                this.quizElements.blankDisplay.className = "target-slot";

                this.quizElements.feedbackText.classList.add('hidden');
                this.quizElements.nextBtn.classList.add('hidden');

                const distractors = (Array.isArray(current.distractors) ? current.distractors : []).filter(word => typeof word === 'string' && word.trim() && word.toLowerCase() !== current.word.toLowerCase());
                const uniqueDistractors = [...new Map(distractors.map(word => [word.toLowerCase(), word])).values()].slice(0, 3);
                for (const fallback of generalDictionary.map(item => item.word).concat(['option 1', 'option 2', 'option 3'])) {
                    if (uniqueDistractors.length >= 3) break;
                    if (fallback.toLowerCase() !== current.word.toLowerCase() && !uniqueDistractors.some(word => word.toLowerCase() === fallback.toLowerCase())) uniqueDistractors.push(fallback);
                }
                const options = [...new Set([current.word, ...uniqueDistractors])].sort(() => Math.random() - 0.5);

                this.quizElements.optionsGrid.innerHTML = '';
                options.forEach(word => {
                    const btn = document.createElement('button');
                    btn.className = 'option-btn w-full text-left p-4 rounded-xl text-slate-200 font-semibold text-sm flex items-center justify-between font-mono';
                    btn.innerHTML = `
                        <span>${escapeHTML(word)}</span>
                        <i class="fa-regular fa-circle text-slate-600 icon-status"></i>
                    `;
                    btn.onclick = () => this.selectOption(word, btn);
                    this.quizElements.optionsGrid.appendChild(btn);
                });
            }

            selectOption(selectedWord, btnEl) {
                if (this.answered) return;
                this.answered = true;

                const current = this.quizData[this.currentIndex];
                const isCorrect = selectedWord.toLowerCase() === current.word.toLowerCase();
                const buttons = this.quizElements.optionsGrid.querySelectorAll('.option-btn');

                buttons.forEach(b => b.disabled = true);

                if (isCorrect) {
                    this.score++;
                    btnEl.classList.add('correct');
                    btnEl.querySelector('.icon-status').className = 'fa-solid fa-circle-check text-emerald-400';

                    this.quizElements.blankDisplay.textContent = current.word;
                    this.quizElements.blankDisplay.className = "target-slot !bg-emerald-950/60 !text-emerald-400 !border-emerald-500";

                    this.showFeedback(true, "Correct!");
                } else {
                    btnEl.classList.add('wrong');
                    btnEl.querySelector('.icon-status').className = 'fa-solid fa-circle-xmark text-red-400';

                    buttons.forEach(b => {
                        if (b.innerText.trim().toLowerCase() === current.word.toLowerCase()) {
                            b.classList.add('correct');
                            b.querySelector('.icon-status').className = 'fa-solid fa-circle-check text-emerald-400';
                        }
                    });

                    this.quizElements.blankDisplay.textContent = current.word;
                    this.quizElements.blankDisplay.className = "target-slot !bg-red-950/60 !text-red-400 !border-red-500";

                    this.showFeedback(false, `Correct answer: ${escapeHTML(current.word)}`);
                }

                this.quizElements.scoreTracker.textContent = `Score: ${this.score}`;
                this.quizElements.nextBtn.classList.remove('hidden');
            }

            showFeedback(isCorrect, text) {
                const fb = this.quizElements.feedbackText;
                fb.classList.remove('hidden', 'text-emerald-400', 'text-red-400');
                fb.classList.add(isCorrect ? 'text-emerald-400' : 'text-red-400');
                fb.innerHTML = isCorrect ? 
                    `<i class="fa-solid fa-check text-sm"></i> <span>${escapeHTML(text)}</span>` : 
                    `<i class="fa-solid fa-xmark text-sm"></i> <span>${escapeHTML(text)}</span>`;
            }

            nextQuestion() {
                this.currentIndex++;
                if (this.currentIndex < this.quizData.length) {
                    this.loadQuestion();
                } else {
                    this.finishQuiz();
                }
            }

            finishQuiz() {
                this.quizElements.progressBar.style.width = '100%';
                this.showQuizScreen('results');

                document.getElementById('final-score').textContent = `${this.score} / ${this.quizData.length}`;
                const pct = Math.round((this.score / this.quizData.length) * 100);
                document.getElementById('final-percentage').textContent = `${pct}%`;
            }

            // UPCOMING QUIZ WORDS: show every current default quiz word with its meaning.
            renderUpcomingWords() {
                const container = document.getElementById('upcoming-word-list');
                if (!container) return;
                container.replaceChildren();
                targetQuizWords.forEach((item, index) => {
                    const card = document.createElement('article');
                    card.className = 'bg-slate-900/80 border border-slate-800 rounded-2xl p-4';
                    const heading = document.createElement('div');
                    heading.className = 'flex items-center justify-between gap-2 mb-2';
                    const word = document.createElement('h3');
                    word.className = 'text-base font-bold text-sky-300 font-mono';
                    word.textContent = `${index + 1}. ${item.word}`;
                    heading.appendChild(word);
                    if (item.partOfSpeech) {
                        const part = document.createElement('span');
                        part.className = 'text-[10px] uppercase bg-slate-800 text-slate-300 px-2 py-1 rounded-full';
                        part.textContent = item.partOfSpeech;
                        heading.appendChild(part);
                    }
                    const meaning = document.createElement('p');
                    meaning.className = 'text-sm text-slate-200 leading-relaxed';
                    meaning.textContent = item.meaning;
                    card.append(heading, meaning);
                    if (item.example) {
                        const example = document.createElement('p');
                        example.className = 'text-xs text-slate-400 italic mt-2';
                        example.textContent = `Example: ${item.example}`;
                        card.appendChild(example);
                    }
                    container.appendChild(card);
                });
            }

            // SPELLING PRACTICE
            startSpelling() {
                this.spellingWords = [...targetQuizWords].sort(() => Math.random() - 0.5);
                this.spellingIndex = 0;
                this.spellingScore = 0;
                this.spellingAnswered = false;
                document.getElementById('spelling-start-btn').classList.add('hidden');
                document.getElementById('spelling-input').disabled = false;
                document.getElementById('spelling-input').value = '';
                document.getElementById('spelling-score').textContent = '';
                this.loadSpellingWord();
            }

            loadSpellingWord() {
                const item = this.spellingWords[this.spellingIndex];
                const input = document.getElementById('spelling-input');
                document.getElementById('spelling-progress').textContent = `Word ${this.spellingIndex + 1} of ${this.spellingWords.length}`;
                document.getElementById('spelling-meaning').textContent = item.meaning;
                document.getElementById('spelling-example').textContent = item.example ? `Example: ${item.example}` : '';
                document.getElementById('spelling-feedback').textContent = '';
                document.getElementById('spelling-feedback').className = 'min-h-6 mt-4 text-sm font-semibold';
                input.value = '';
                input.disabled = false;
                this.spellingAnswered = false;
                document.getElementById('spelling-check-btn').classList.remove('hidden');
                document.getElementById('spelling-reveal-btn').classList.remove('hidden');
                document.getElementById('spelling-next-btn').classList.add('hidden');
                input.focus();
            }

            checkSpelling() {
                if (!this.spellingWords.length || this.spellingAnswered) return;
                const item = this.spellingWords[this.spellingIndex];
                const guess = document.getElementById('spelling-input').value.trim();
                if (!guess) {
                    document.getElementById('spelling-feedback').textContent = 'Type a spelling first.';
                    return;
                }
                this.spellingAnswered = true;
                const correct = guess.localeCompare(item.word, undefined, { sensitivity: 'accent' }) === 0 && guess.toLowerCase() === item.word.toLowerCase();
                const feedback = document.getElementById('spelling-feedback');
                if (correct) {
                    this.spellingScore++;
                    feedback.textContent = 'Correct spelling!';
                    feedback.classList.add('text-emerald-400');
                } else {
                    feedback.textContent = `Not quite. Correct spelling: ${item.word}`;
                    feedback.classList.add('text-rose-400');
                }
                document.getElementById('spelling-input').disabled = true;
                document.getElementById('spelling-check-btn').classList.add('hidden');
                document.getElementById('spelling-reveal-btn').classList.add('hidden');
                document.getElementById('spelling-next-btn').classList.remove('hidden');
                document.getElementById('spelling-score').textContent = `Correct so far: ${this.spellingScore}`;
            }

            revealSpelling() {
                if (!this.spellingWords.length || this.spellingAnswered) return;
                const item = this.spellingWords[this.spellingIndex];
                this.spellingAnswered = true;
                const feedback = document.getElementById('spelling-feedback');
                feedback.textContent = `Answer: ${item.word}`;
                feedback.classList.add('text-sky-300');
                document.getElementById('spelling-input').disabled = true;
                document.getElementById('spelling-check-btn').classList.add('hidden');
                document.getElementById('spelling-reveal-btn').classList.add('hidden');
                document.getElementById('spelling-next-btn').classList.remove('hidden');
            }

            nextSpelling() {
                if (this.spellingIndex + 1 < this.spellingWords.length) {
                    this.spellingIndex++;
                    this.loadSpellingWord();
                    return;
                }
                document.getElementById('spelling-progress').textContent = 'Practice complete!';
                document.getElementById('spelling-meaning').textContent = `You completed all ${this.spellingWords.length} words.`;
                document.getElementById('spelling-example').textContent = '';
                document.getElementById('spelling-input').value = '';
                document.getElementById('spelling-input').disabled = true;
                document.getElementById('spelling-feedback').textContent = `Final spelling score: ${this.spellingScore} / ${this.spellingWords.length}`;
                document.getElementById('spelling-feedback').className = 'min-h-6 mt-4 text-sm font-semibold text-sky-300';
                document.getElementById('spelling-score').textContent = 'Start again to practice in a new random order.';
                document.getElementById('spelling-next-btn').classList.add('hidden');
                document.getElementById('spelling-start-btn').classList.remove('hidden');
            }


        }

        // Global Instance
        let app;
        window.addEventListener('DOMContentLoaded', () => {
            app = new VocabMasterApp();
        });
    