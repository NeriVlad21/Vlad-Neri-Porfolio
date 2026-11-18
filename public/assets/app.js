document.addEventListener('DOMContentLoaded', () => {
    console.log("VladGPT System: Online");

    // ==========================================
    // 1. THEME TOGGLE
    // ==========================================
    const body = document.body;
    const chain = document.querySelector('.pull-chain'); 

    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
    }

    if(chain) {
        chain.addEventListener('click', (e) => {
            e.preventDefault();
            chain.style.transform = "translateY(20px)";
            setTimeout(() => chain.style.transform = "translateY(0)", 200);
            body.classList.toggle('light-mode');
            
            if (body.classList.contains("light-mode")) {
                localStorage.setItem("theme", "light");
            } else {
                localStorage.setItem("theme", "dark");
            }
        });
    }

    // ==========================================
    // 2. STARFIELD ANIMATION
    // ==========================================
    const canvas = document.getElementById('starfield');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width, height, stars = [];

        function initStars() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            stars = [];
            for (let i = 0; i < 100; i++) {
                stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    size: Math.random() * 2,
                    speed: Math.random() * 0.5 + 0.1
                });
            }
        }

        function drawStars() {
            ctx.clearRect(0, 0, width, height);
            const isLight = document.body.classList.contains('light-mode');
            ctx.fillStyle = isLight ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.8)";
            
            stars.forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
                star.y -= star.speed;
                if (star.y < 0) {
                    star.y = height;
                    star.x = Math.random() * width;
                }
            });
            requestAnimationFrame(drawStars);
        }

        window.addEventListener('resize', initStars);
        initStars();
        drawStars();
    }

    // ==========================================
    // 3. MIKAELGPT (Professional, Niched & Routed)
    // ==========================================
    const database = [
        // --- CHIT CHAT & BOUNDARIES ---
        { 
            keys: ["fuck", "shit", "bitch", "stupid", "gago", "tanga", "putangina", "bobo", "yawa", "pisti", "tarantado"], 
            resp: "I am a professional portfolio assistant, so let us keep the language clean. If you are frustrated, I get it—debugging is hard. Why not take a breath and type 'projects' to see some clean code solutions?" 
        },
        { 
            keys: ["tagalog", "kamusta", "sino ka", "marunong ka", "pinoy", "bisaya", "amigo", "atay", "unsa", "giatay", "yads", "musta"], 
            resp: "Kamusta! I am fully bilingual in English and Tagalog, with a bit of Bisaya. However, Vlad's true native languages are PHP and Kotlin. Type 'skills' to see his technical fluency." 
        },
        { 
            keys: ["haha", "lol", "lmao", "hehe", "rofl", "lmfao", "laugh"], 
            resp: "I am glad to bring some levity to your day! But I am also here to talk business. Try asking me about Vlad's 'experience' or his professional 'goals' to see what he brings to the table." 
        },
        { 
            keys: ["hello", "hi", "hey", "sup", "yo", "greetings", "wassup", "uy"], 
            resp: "Welcome to Vlad's interactive portfolio. I am VladGPT, his digital assistant. You can ask me about his 'tech stack', his 'experience', or his 'education'. Where should we begin?" 
        },
        { 
            keys: ["how are you", "how are you doing", "hows it going", "kumusta ka", "are you okay"], 
            resp: "My JavaScript logic is running flawlessly, thank you. I am here to assist you in learning more about Vlad's professional background. Would you like to view his 'portfolio' or 'skills'?" 
        },
        { 
            keys: ["thank you", "thanks", "salamat", "salamat po", "ty"], 
            resp: "You are very welcome. If you have any further questions about his qualifications, just ask. Otherwise, feel free to visit the <a href='/contact' class='chat-link'>Contact Page</a> to send him a formal inquiry." 
        },
        { 
            keys: ["bye", "goodbye", "see you", "paalam", "babay", "gtg"], 
            resp: "Thank you for visiting. If you are a recruiter or client, Vlad would love to hear from you. Visit the <a href='/contact' class='chat-link'>Contact Page</a> before you leave. Have a great day!" 
        },
        { 
            keys: ["are you ai", "bot", "robot", "chatgpt", "gpt", "gemini", "what are you", "are you real", "llm"], 
            resp: "I am not an LLM. I am a custom-coded heuristic matching engine built entirely from scratch in Vanilla JavaScript by Vlad. I represent his ability to build creative, interactive web elements. Ask about his 'design' methodology." 
        },

        // --- LORE & PROFESSIONAL HABITS ---
        { 
            keys: ["toxic trait", "coffee", "drink", "macchiato", "documentation", "read docs", "coding habit", "weakness"], 
            resp: "Unlike many developers, Vlad meticulously reads documentation before implementation. His only real 'vice' is an absolute reliance on Iced Macchiatos to power his late-night coding sessions. Speaking of coding, ask about his 'tech stack'." 
        },
        { 
            keys: ["why coding", "why computer science", "passion", "why programming", "motivation"], 
            resp: "He pursues Computer Science because he is driven by problem-solving and architectural design. He views software development as the ultimate tool to optimize real-world processes. Want to see his 'goals' for the future?" 
        },
        { 
            keys: ["favorite language", "best language", "prefer to code in"], 
            resp: "For mobile architecture, he highly prefers Kotlin for its safety and conciseness. For backend web logic, he utilizes native PHP to maintain absolute control over his databases without relying on bloated frameworks. Type 'php' or 'kotlin' to learn more." 
        },
        { 
            keys: ["worst language", "hate programming", "dislike"], 
            resp: "He avoids languages that lack strict typing when building large-scale applications. He believes strong architecture prevents future technical debt. Ask about his 'design' style to see how he approaches front-end." 
        },
        { 
            keys: ["dark mode", "light mode", "theme preference"], 
            resp: "He prefers dark mode for reducing eye strain during long development sprints. However, he built this portfolio with a functional light mode via the pull-chain to demonstrate accessibility and user preference. Type 'education' to learn about his academic background." 
        },
        { 
            keys: ["anime", "watching anime", "shows", "manga", "manhwa", "movies", "music", "spotify", "tenth tide"], 
            resp: "Outside of programming, he unwinds with tactical sports anime (like Ao Ashi) and runs a YouTube channel called Tenth Tide for music lyrics. This channel actually highlights his video editing skills. Type 'smm' to learn about his media management." 
        },
        { 
            keys: ["chess", "elo", "play game", "strategy"], 
            resp: "He plays chess at a 1300 ELO level. He approaches backend data flow the exact same way he approaches a chessboard: anticipating edge cases several steps ahead. Want to test your own logic? Type 'play'." 
        },
        { 
            keys: ["design", "aesthetic", "style", "colors"], 
            resp: "He favors clean, minimalist 'Stoic' aesthetics, utilizing monochromatic schemes and glassmorphism. He believes UI should never distract from the UX. Ask about his 'projects' to see his interfaces in action." 
        },

        // --- BIO, DISCIPLINE & GOALS ---
        { 
            keys: ["who are you", "who is vlad", "who is mikael", "identify", "intro", "bio", "about you", "tell me about yourself"], 
            resp: "I am the digital representation of Mikael Vladimir M. Neri. He is a 21-year-old Computer Science student, Full Stack Developer, and Data Annotation Specialist. Ask me about his 'location', 'discipline', or 'skills'." 
        },
        { 
            keys: ["age", "how old", "birth year", "birthday"], 
            resp: "He is 21 years old (born in 2005). He combines the fresh perspective of his generation with the rigorous work ethic required to architect scalable systems. Curious where he studies? Type 'school'." 
        },
        { 
            keys: ["location", "where do you live", "address", "based", "city", "hometown", "la union", "rosario"], 
            resp: "He is based in Rosario, La Union, Philippines. He is fully equipped with the hardware and connection stability required for seamless remote work. Type 'contact' if you have a role for him." 
        },
        { 
            keys: ["fitness goal", "gym", "weight loss", "diet", "weight", "bmi", "tall", "height", "omad", "discipline"], 
            resp: "Vlad proves his dedication through his strict OMAD (One Meal A Day) and boxing regimen, recently dropping from 135kg to 110kg. This physical discipline directly translates to his professional stamina. Type 'boxing' to learn more." 
        },
        { 
            keys: ["hobbies", "interests", "free time", "fun", "likes", "pastimes", "gaming"], 
            resp: "He balances his screen time with intense physical training and sports analytics. He closely analyzes tactical combat sports and NBA efficiency stats. Try typing 'nba' or 'boxing'." 
        },
        { 
            keys: ["nba", "basketball", "lakers", "sports", "favorite team", "la lakers", "ball", "hoops"], 
            resp: "He is a die-hard Lakers fan, but he watches the game analytically, studying player gravity and lineup efficiency. He applies this same analytical mindset to 'data annotation'." 
        },
        { 
            keys: ["boxing", "combat sports", "pacquiao", "mayweather", "training", "workout", "tyson", "marquez", "sweet science"], 
            resp: "Boxing is his physical outlet. Studying the defensive traps of Mayweather and the footwork of Pacquiao keeps his mind sharp when stepping away from the IDE. Ask about his 'future' goals next." 
        },
        { 
            keys: ["future", "5 years", "five years", "abroad", "uk", "civil service", "goals"], 
            resp: "Professionally, he is preparing for the Civil Service Exam to secure elite qualifications. Long term, he aims to relocate to the UK as a Senior Full Stack Developer or specialized Data Analyst. Ask about his 'experience' to see his progress." 
        },

        // --- SKILLS & EXPERIENCE (The Interview Flex) ---
        { 
            keys: ["stack", "tech stack", "technologies", "languages", "programming", "tools", "skills", "capabilities", "what can you do", "hire"], 
            resp: "He commands a robust Full-Stack arsenal: PHP, Python, and SQL for secure backend architecture; Kotlin for native Android mobile development; and HTML/CSS/JS for responsive frontends. Type 'specialty' to see what he excels at." 
        },
        { 
            keys: ["specialty", "specialize", "expertise", "focus", "main skill", "best at"], 
            resp: "His primary expertise lies in Native Android Development (Kotlin) and relational database architecture (PHP/MySQL). Additionally, he possesses a high-demand niche skill in 3D LiDAR AI Data Annotation. Ask about 'remotasks'." 
        },
        { 
            keys: ["strengths", "greatest strength", "good at"], 
            resp: "His greatest professional strength is dynamic adaptability. He seamlessly transitions between managing complex database schemas, training AI through 3D spatial annotation, and editing high-engagement media. Type 'smm' to see his marketing side." 
        },
        { 
            keys: ["php", "backend", "web dev", "sql", "database"], 
            resp: "He writes clean, native PHP and crafts complex MySQL queries to ensure high security and low server load, deliberately avoiding bloated frameworks for custom solutions. Type 'Life Flow' to see a PHP logistics app." 
        },
        { 
            keys: ["kotlin", "android", "mobile app", "app dev", "apk"], 
            resp: "He develops exclusively in Kotlin within Android Studio to build high-performance, native applications, managing everything from XML UI layouts to backend logic. Type 'PennyWise' to hear about his mobile finance app." 
        },
        { 
            keys: ["experience", "work experience", "job history", "career", "employment", "resume", "work"], 
            resp: "Despite being a student, he has amassed heavy professional experience as an AI Data Annotation Specialist and a high-level Social Media Manager. Type 'remotasks' or 'smm' to dive into the technical details." 
        },
        { 
            keys: ["remotasks", "data annotation", "ai training", "lidar", "annotator", "ai job"], 
            resp: "As a specialist, he processes highly complex 3D LiDAR point clouds for autonomous vehicle AI. He manages high-volume outputs (up to 100 tasks/week) while maintaining a strict 98%+ accuracy rating. Ask about his 'teamwork'." 
        },
        { 
            keys: ["smm", "social media manager", "content manager", "marketing", "video editing", "capcut", "davinci"], 
            resp: "He directs digital strategy and video editing (DaVinci Resolve) for high-profile clients, managing assets for influencers with over 2.1 million followers and driving massive organic reach. Type 'projects' to switch back to his code." 
        },
        { 
            keys: ["teamwork", "team player", "leadership", "lead"], 
            resp: "He is a natural structural leader. In collaborative settings like his university thesis or the CS Org Hub, he assumes responsibility for the backend architecture and database security. Type 'thesis' to learn more." 
        },

        // --- PROJECTS ---
        { 
            keys: ["projects", "portfolio", "what have you built", "showcase", "apps", "websites"], 
            resp: "He has architected multiple production-ready systems: Life Flow, Moya, PennyWise, Manga Haven, and an AI Food Recommender. Type the name of any of those projects to learn exactly how they work!" 
        },
        { 
            keys: ["life flow", "blood donation", "lifeflow", "blood app", "hospital system", "donor app"], 
            resp: "Life Flow is a critical healthcare logistics platform built with PHP and MySQL, designed to bridge the real-time gap between blood donors and emergency hospital databases. Type 'Moya' to see his business logistics app." 
        },
        { 
            keys: ["moya", "water delivery", "refill the chill", "moya app", "inventory system", "water refilling"], 
            resp: "Moya is an inventory and delivery routing system built for local water stations to optimize their commercial operations and track live orders. Curious about his mobile logic? Type 'PennyWise'." 
        },
        { 
            keys: ["pennywise", "finance app", "money manager", "android app", "kotlin project", "savings tracker"], 
            resp: "PennyWise is a native Android finance tracker built completely in Kotlin. He engineered a custom algorithm within the app to calculate the precise Future Value of user savings. Type 'Manga Haven' for his dashboard project." 
        },
        { 
            keys: ["manga haven", "manga project", "bookstore", "rental system", "library system", "book rental"], 
            resp: "Manga Haven PH is a comprehensive dashboard for inventory management. He programmed the backend to automatically calculate and apply penalty fees for overdue rentals. Type 'food' to see his AI integration project." 
        },
        { 
            keys: ["food", "panlasang pinoy", "recommendation", "cook", "streamlit", "python"], 
            resp: "Demonstrating his Python and Data Science capabilities, he built an AI Food Recommendation engine utilizing Streamlit, trained specifically on Panlasang Pinoy datasets. You can test it live on the <a href='/projects' class='chat-link'>Projects Page</a>." 
        },
        { 
            keys: ["fslames", "thesis", "sign language", "tensorflow", "mediapipe", "machine learning"], 
            resp: "F.S.L.A.M.E.S. is his current capstone thesis—a complex Filipino Sign Language education tool integrating MediaPipe and TensorFlow for live gesture recognition. Ask about the 'cs org hub' for his campus contributions." 
        },
        { 
            keys: ["cs org hub", "organization", "university platform"], 
            resp: "He is currently engineering the digital infrastructure for his university's CS department, featuring secure role-based authentication and a centralized announcement portal. Speaking of university, type 'school' to verify his academic status." 
        },
        { 
            keys: ["school", "education", "university", "college", "degree", "course", "upang"], 
            resp: "He is a 4th-year Bachelor of Science in Computer Science student at PHINMA UPang, expected to graduate with the Class of 2027 with a strong track record of academic excellence. Type 'experience' to see his concurrent work history." 
        },

        // --- CONTACT & EASTER EGGS ---
        { 
            keys: ["contact", "email", "phone", "reach me", "message", "get in touch", "number", "mobile number"], 
            resp: "Vlad is open to professional opportunities. You can email him at mereziko@gmail.com, text him at 0945 499 8054, or use the secure form on the <a href='/contact' class='chat-link'>Contact Page</a>." 
        },
        { 
            keys: ["socials", "links", "facebook", "linkedin", "github", "connect", "profiles", "repo"], 
            resp: "You can review his source code directly on GitHub (ikovlad) or connect with him professionally on LinkedIn. Find all verified links on the <a href='/contact' class='chat-link'>Contact Page</a>." 
        },
        { 
            keys: ["default"], 
            resp: "I did not quite catch that. To see my best professional insights, try typing 'skills', 'experience', 'projects', or 'education'." 
        },
        { 
            keys: ["fiona", "bff premium pro max", "fibi", "bff", "friends", "rickroll"], 
            action: "rickroll", 
            resp: "Accessing top-secret classified files... Standby." 
        },
        { 
            keys: ["game", "easter egg", "play", "2048", "bored"], 
            action: "play_game", 
            resp: "Let us see if your logical visualization is as sharp as your coding. Initializing 2048 engine..." 
        }
    ];

    // ==========================================
    // 4. CHAT INTERFACE LOGIC
    // ==========================================
    const input = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const history = document.getElementById('chat-history');
    const suggestBox = document.getElementById('chat-suggestions');
    const mainChat = document.getElementById('vlad-gpt-main');
    const minimizeBtn = document.getElementById('minimize-chat');
    const inputArea = document.querySelector('.chat-input-area'); 
    const chatTrigger = document.querySelector('.chat-open-trigger');

    const suggestions = [
        { label: "Who is Vlad?", keyword: "who are you" },
        { label: "Check Skills", keyword: "skills" },
        { label: "View Projects", keyword: "projects" },
        { label: "Contact Info", keyword: "contact" }
    ];

    if(suggestBox) {
        suggestBox.innerHTML = '';
        suggestions.forEach(item => {
            const btn = document.createElement('div');
            btn.className = 'suggestion-chip';
            btn.innerText = item.label;
            btn.onclick = () => { 
                if(input) { input.value = item.label; handleChat(item.keyword); }
            };
            suggestBox.appendChild(btn);
        });
    }

    if (mainChat && inputArea) {
        inputArea.addEventListener('mouseenter', () => {
            mainChat.classList.add('active');
            if(chatTrigger) chatTrigger.classList.add('is-hidden');
        });

        if(input) {
            input.addEventListener('focus', () => {
                mainChat.classList.add('active');
                if(chatTrigger) chatTrigger.classList.add('is-hidden');
            });
        }
        
        if(chatTrigger) {
            chatTrigger.addEventListener('click', (e) => {
                e.preventDefault();
                mainChat.classList.add('active');
                chatTrigger.classList.add('is-hidden');
                setTimeout(() => { if (input) input.focus(); }, 100);
            });
        }

        if (minimizeBtn) {
            minimizeBtn.addEventListener('click', (e) => {
                e.stopPropagation(); 
                e.preventDefault();
                mainChat.classList.remove('active');
                if(chatTrigger) chatTrigger.classList.remove('is-hidden');
                if(input) input.blur();
            });
        }
        
        mainChat.addEventListener('mouseleave', () => {
            if (input !== document.activeElement) {
                mainChat.classList.remove('active');
                if(chatTrigger) chatTrigger.classList.remove('is-hidden');
            }
        });
    }

    // 5. MESSAGING LOGIC (WITH REGEX WORD BOUNDARY FIX)
    function handleChat(forcedKey = null) {
        if(!input) return;
        const text = input.value.trim();
        if(!text && !forcedKey) return;

        mainChat.classList.add('active');
        if(chatTrigger) chatTrigger.classList.add('is-hidden');
        if(suggestBox) suggestBox.style.display = 'none';

        addMsg(text || forcedKey, 'user');
        input.value = '';

        const thinkingId = 'thinking-' + Date.now();
        const d = document.createElement('div');
        d.className = `msg bot`;
        d.id = thinkingId;
        d.innerHTML = '...';
        history.appendChild(d);
        history.scrollTop = history.scrollHeight;

        setTimeout(() => {
            const bubble = document.getElementById(thinkingId);
            if(bubble) bubble.remove();

            let reply = database.find(item => item.keys.includes("default")).resp; 
            let matchedAction = null; 
            
            const search = (forcedKey || text).toLowerCase();

            // REGEX FIX: This prevents "specialty" from triggering "lt"
            for(let item of database) {
                if(item.keys.some(k => {
                    const escapedKey = k.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                    const regex = new RegExp('\\b' + escapedKey + '\\b', 'i');
                    return regex.test(search);
                })) {
                    reply = item.resp;
                    if (item.action) {
                        matchedAction = item.action;
                    }
                    break;
                }
            }
            
            addMsg(reply, 'bot');

            // SECRET ACTIONS
            if (matchedAction === "rickroll") {
                setTimeout(() => {
                    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
                }, 1500); 
            } else if (matchedAction === "play_game") {
                setTimeout(() => {
                    document.getElementById('game-modal').classList.add('active');
                    initGame(); 
                }, 1500); 
            }

        }, 500);
    }

    function addMsg(txt, type) {
        const d = document.createElement('div');
        d.className = `msg ${type}`;
        d.innerHTML = txt; 
        history.appendChild(d);
        history.scrollTop = history.scrollHeight;
    }

    if(sendBtn) sendBtn.addEventListener('click', () => handleChat());
    if(input) input.addEventListener('keypress', (e) => { if(e.key==='Enter') handleChat(); });

    // ==========================================
    // 6. SCROLL ANIMATIONS
    // ==========================================
    const animatedElements = document.querySelectorAll('.animate-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach((el) => observer.observe(el));

    // ==========================================
    // 7. 2048 EASTER EGG ENGINE
    // ==========================================
    let board = [];
    let score = 0;
    const gridEl = document.getElementById('game-grid');
    const scoreEl = document.getElementById('game-score');

    function initGame() {
        board = [...Array(4)].map(() => Array(4).fill(0));
        score = 0;
        spawnTile();
        spawnTile();
        updateGrid();
    }

    function spawnTile() {
        let empty = [];
        for(let r=0; r<4; r++) {
            for(let c=0; c<4; c++) {
                if(board[r][c] === 0) empty.push({r, c});
            }
        }
        if(empty.length > 0) {
            let rand = empty[Math.floor(Math.random() * empty.length)];
            board[rand.r][rand.c] = Math.random() < 0.9 ? 2 : 4;
        }
    }

    function slideAndMergeRow(row) {
        let filtered = row.filter(val => val !== 0);
        let merged = [];
        for(let i=0; i<filtered.length; i++) {
            if(i < filtered.length - 1 && filtered[i] === filtered[i+1]) {
                merged.push(filtered[i] * 2);
                score += filtered[i] * 2;
                i++; 
            } else {
                merged.push(filtered[i]);
            }
        }
        while(merged.length < 4) merged.push(0);
        return merged;
    }

    function moveBoard(dir) {
        let oldBoard = JSON.stringify(board);
        for(let i=0; i<4; i++) {
            if(dir === 'left') {
                board[i] = slideAndMergeRow(board[i]);
            } else if(dir === 'right') {
                board[i] = slideAndMergeRow(board[i].slice().reverse()).reverse();
            } else if(dir === 'up') {
                let col = [board[0][i], board[1][i], board[2][i], board[3][i]];
                let merged = slideAndMergeRow(col);
                for(let r=0; r<4; r++) board[r][i] = merged[r];
            } else if(dir === 'down') {
                let col = [board[3][i], board[2][i], board[1][i], board[0][i]];
                let merged = slideAndMergeRow(col);
                for(let r=0; r<4; r++) board[r][i] = merged[3-r];
            }
        }
        if(JSON.stringify(board) !== oldBoard) {
            spawnTile();
            updateGrid();
            checkGameOver();
        }
    }

    function updateGrid() {
        if(!gridEl) return;
        gridEl.innerHTML = '';
        scoreEl.innerText = score;
        for(let r=0; r<4; r++) {
            for(let c=0; c<4; c++) {
                let val = board[r][c];
                let cell = document.createElement('div');
                cell.className = `game-cell ${val > 0 ? 'tile-'+val : ''}`;
                cell.innerText = val > 0 ? val : '';
                gridEl.appendChild(cell);
            }
        }
    }

    function checkGameOver() {
        let over = true;
        for(let r=0; r<4; r++) {
            for(let c=0; c<4; c++) {
                if(board[r][c] === 0) over = false;
                if(r < 3 && board[r][c] === board[r+1][c]) over = false;
                if(c < 3 && board[r][c] === board[r][c+1]) over = false;
            }
        }
        if(over) setTimeout(() => alert(`Game Over! Final Score: ${score}`), 300);
    }

    document.addEventListener('keydown', (e) => {
        if(!document.getElementById('game-modal').classList.contains('active')) return;
        if(["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) e.preventDefault();
        
        if(e.key === 'ArrowUp') moveBoard('up');
        if(e.key === 'ArrowDown') moveBoard('down');
        if(e.key === 'ArrowLeft') moveBoard('left');
        if(e.key === 'ArrowRight') moveBoard('right');
    });

    document.querySelectorAll('.dir-btn').forEach(btn => {
        btn.addEventListener('click', () => moveBoard(btn.getAttribute('data-dir')));
    });

    const resetBtn = document.getElementById('reset-game');
    if(resetBtn) resetBtn.addEventListener('click', initGame);

    const closeBtn = document.getElementById('close-game');
    if(closeBtn) closeBtn.addEventListener('click', () => {
        document.getElementById('game-modal').classList.remove('active');
    });
});