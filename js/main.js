/* ================================================================
   Plonk's Blog — 主脚本
   ================================================================
   数据分层：
     STATIC_POSTS  — 内置静态文章（提交到 GitHub 时自带）
     USER_POSTS    — 用户通过管理后台添加的文章（localStorage）
     getPosts()    — 合并两者，用户文章排在前面
   ================================================================ */

// ==================== 存储键名 ====================
const STORAGE_KEY = 'plonk_blog_posts';

// ==================== 内置静态文章 ====================
const STATIC_POSTS = [
    {
        id: 'static-1',
        title: '从零搭建个人博客：技术选型与架构设计',
        tag: '技术',
        date: '2026-07-18',
        excerpt: '记录我从零开始搭建个人博客的全过程，包括技术选型考量、架构设计思路以及部署方案的选择。',
        url: '#',
        cover: '',
        content: `<h2>为什么选择搭建个人博客？</h2>
<p>在2026年的今天，拥有一个属于自己的博客空间，不仅是技术人的标配，更是梳理知识、沉淀思考的最佳方式。</p>
<p>本文详细记录了从零开始搭建这个博客的全过程，包括：</p>
<ul>
  <li><strong>技术选型</strong>：为什么选择纯静态方案而非动态博客框架</li>
  <li><strong>架构设计</strong>：目录结构、组件划分、数据流设计</li>
  <li><strong>部署方案</strong>：GitHub Pages 的配置与自定义域名绑定</li>
</ul>
<h2>技术选型考量</h2>
<p>在对比了 WordPress、Hexo、Hugo 等方案后，最终决定采用纯静态 HTML/CSS/JS 架构。原因有三：</p>
<ol>
  <li>无需后端服务器，零维护成本</li>
  <li>加载速度快，用户体验好</li>
  <li>完全掌控每一行代码，灵活性最高</li>
</ol>
<blockquote>选择工具时，最简单的方案往往是最好的方案。—— 奥卡姆剃刀原则</blockquote>`,
        isStatic: true
    },
    {
        id: 'static-2',
        title: 'JavaScript 异步编程的演进：从回调到 async/await',
        tag: '前端',
        date: '2026-07-10',
        excerpt: '深入浅出地讲解 JavaScript 异步编程的发展历程，理解每种模式的优缺点以及适用场景。',
        url: '#',
        cover: '',
        content: `<h2>异步编程的四个时代</h2>
<p>JavaScript 的异步编程经历了四个主要阶段的演进，每一个阶段都解决了前一阶段的核心痛点。</p>
<h3>1. 回调函数（Callback）</h3>
<p>最早期的异步方案，通过传入回调函数处理异步结果。优点是简单直观，缺点是容易陷入「回调地狱」。</p>
<pre><code>fs.readFile('file.txt', (err, data) => {
  if (err) throw err;
  console.log(data);
});</code></pre>
<h3>2. Promise</h3>
<p>Promise 将异步操作封装为状态机，支持链式调用，大大改善了代码的可读性。</p>
<h3>3. Generator</h3>
<p>Generator 函数提供了暂停和恢复执行的能力，为 async/await 的出现奠定了基础。</p>
<h3>4. async/await</h3>
<p>终极方案，让异步代码看起来像同步代码一样直观，是目前最推荐的方式。</p>`,
        isStatic: true
    },
    {
        id: 'static-3',
        title: 'CSS Grid 布局实战指南',
        tag: '前端',
        date: '2026-07-02',
        excerpt: '通过实际案例学习 CSS Grid 布局的核心理念和常见模式，掌握现代网页布局的利器。',
        url: '#',
        cover: '',
        content: `<h2>Grid 布局的核心概念</h2>
<p>CSS Grid Layout 是迄今为止最强大的 CSS 布局系统。</p>
<h3>基本术语</h3>
<ul>
  <li><strong>Grid Container</strong>：通过 <code>display: grid</code> 创建的网格容器</li>
  <li><strong>Grid Item</strong>：容器的直接子元素</li>
  <li><strong>Grid Line</strong>：构成网格结构的分界线</li>
  <li><strong>Grid Cell</strong>：相邻网格线之间的区域</li>
</ul>
<h3>常用属性速查</h3>
<pre><code>.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  grid-template-areas:
    "header  header  header"
    "sidebar content content"
    "footer  footer  footer";
}</code></pre>
<p>掌握 Grid 布局，你就可以轻松实现任何复杂的页面结构。</p>`,
        isStatic: true
    },
    {
        id: 'static-4',
        title: '我的开源项目经验分享',
        tag: '开源',
        date: '2026-06-22',
        excerpt: '参与开源社区两年来的心得体会，从使用者到贡献者的成长之路。',
        url: '#',
        cover: '',
        content: `<h2>从使用者到贡献者</h2>
<p>两年前，我还是一个只会「拿来主义」的开发者。直到有一天，我发现了一个 bug，鼓起勇气提了第一个 PR……</p>
<h3>如何开始参与开源</h3>
<p>如果你也想参与开源但不知从何入手，以下是我的建议：</p>
<ol>
  <li><strong>从文档开始</strong>：修正错别字、改进文档是最友好的入门方式</li>
  <li><strong>修复 small bug</strong>：找标记为 "good first issue" 的问题</li>
  <li><strong>回答社区问题</strong>：在 Issues 和 Discussions 中帮助他人</li>
  <li><strong>坚持提交</strong>：持续贡献比一次性大提交更有价值</li>
</ol>
<blockquote>开源不仅仅是在写代码，更是在构建社区。</blockquote>`,
        isStatic: true
    },
    {
        id: 'static-5',
        title: '理解 RESTful API 设计原则',
        tag: '后端',
        date: '2026-06-14',
        excerpt: 'RESTful API 设计的最佳实践和常见误区，帮助你设计出优雅、可维护的 API 接口。',
        url: '#',
        cover: '',
        content: `<h2>什么是 RESTful API？</h2>
<p>REST（Representational State Transfer）是一种架构风格，而不仅仅是 URL 的命名规范。</p>
<h3>核心原则</h3>
<ul>
  <li><strong>资源导向</strong>：URL 表示资源，动词由 HTTP 方法表达</li>
  <li><strong>无状态</strong>：每个请求包含所有必要信息</li>
  <li><strong>统一接口</strong>：使用标准 HTTP 方法和状态码</li>
</ul>
<h3>常见误区</h3>
<p>很多开发者在设计 API 时会犯以下错误：</p>
<pre><code>// ❌ 错误：用动词描述操作
GET /getUser/123
POST /createUser

// ✅ 正确：资源 + HTTP 方法
GET  /users/123
POST /users</code></pre>
<p>遵循这些原则，你的 API 会更容易理解、更易于维护。</p>`,
        isStatic: true
    },
    {
        id: 'static-6',
        title: '2026 年技术趋势展望',
        tag: '思考',
        date: '2026-06-05',
        excerpt: '整理我对 2026 年技术发展的观察与思考，涵盖 AI、Web 开发、云计算等热门领域。',
        url: '#',
        cover: '',
        content: `<h2>2026：AI 与全栈开发的深度融合</h2>
<p>站在2026年年中回望，技术世界的变化比以往任何时候都要快。</p>
<h3>AI 辅助开发成为常态</h3>
<p>代码补全、自动生成测试、智能重构——AI 已经从「玩具」变成了开发者的日常工具。但 AI 不会取代开发者，而是让开发者能更专注于创造性的工作。</p>
<h3>Web 平台能力的持续增强</h3>
<p>随着浏览器 API 的不断丰富，Web 应用正在逼近原生应用的体验。WebGPU、文件系统 API、原生剪贴板等新能力正在打开新的可能性。</p>
<h3>边缘计算的普及</h3>
<p>从 Cloudflare Workers 到各种 Edge Runtime，计算正在向用户靠近。延迟更低、体验更好、成本更优。</p>
<blockquote>预测未来的最好方式就是创造未来。—— Alan Kay</blockquote>`,
        isStatic: true
    }
];

// ==================== 数据读写 ====================

const GIT_CONFIG_KEY = 'plonk_git_config';

/** 远程文章缓存（从 posts.json 加载） */
let _remotePosts = [];

/** 从 GitHub 仓库的 posts.json 加载远程文章 */
async function loadRemotePosts() {
    try {
        const res = await fetch('posts.json?_=' + Date.now());
        if (res.ok) {
            const data = await res.json();
            // 数据校验：确保每篇文章有必要的字段
            if (Array.isArray(data)) {
                _remotePosts = data
                    .filter(p => p && typeof p === 'object' && p.id && p.title)
                    .map(p => ({
                        ...p,
                        isStatic: false,  // 统一标记为自定义文章
                        excerpt: p.excerpt || '',
                        date: p.date || '',
                        url: p.url || '#',
                        cover: p.cover || '',
                        content: p.content || ''
                    }));
            }
        }
    } catch {
        // 静默失败，使用本地数据
    }
}

/** 从 localStorage 读取本地文章 */
function loadUserPosts() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
}

/** 保存用户文章到 localStorage（本地草稿） */
function saveUserPosts(posts) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

/** 获取合并后的全部文章：本地草稿 > 远程已同步 > 静态 */
function getPosts() {
    const localPosts = loadUserPosts();
    const localMap = new Map(localPosts.map(p => [p.id, p]));

    // 合并远程数据，被本地编辑过的用本地版本覆盖
    const syncedPosts = _remotePosts.map(p => localMap.get(p.id) || p);

    // 标记哪些 ID 已同步
    const syncedIds = new Set(_remotePosts.map(p => p.id));

    // 本地新增（尚未同步）的文章排在前面
    const unsyncedPosts = localPosts.filter(p => !syncedIds.has(p.id));

    return [...unsyncedPosts, ...syncedPosts, ...STATIC_POSTS];
}

/** 生成唯一 ID */
function genId() {
    return 'post_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6);
}

// ==================== 动态验证码 ====================

/** 当前验证码值 */
let _currentCaptcha = '';

/** 生成 4 位随机数字验证码 */
function generateCaptcha() {
    _currentCaptcha = String(Math.floor(1000 + Math.random() * 9000));
    const el = document.getElementById('captchaDisplay');
    if (el) el.textContent = _currentCaptcha;
    return _currentCaptcha;
}

/** 刷新验证码（暴露给全局） */
function refreshCaptcha() {
    generateCaptcha();
    const input = document.getElementById('postCaptcha');
    if (input) {
        input.value = '';
        input.classList.remove('captcha-error');
    }
}

// ==================== GitHub 同步 ====================

const GitSync = {
    /** 读取 GitHub 配置 */
    getConfig() {
        try {
            return JSON.parse(localStorage.getItem(GIT_CONFIG_KEY)) || {};
        } catch { return {}; }
    },

    /** 保存 GitHub 配置 */
    saveConfig(config) {
        localStorage.setItem(GIT_CONFIG_KEY, JSON.stringify(config));
    },

    /** 获取 posts.json 当前 SHA（文件存在时返回 SHA，不存在返回 null） */
    async fetchSha(owner, repo, branch, token) {
        const url = `https://api.github.com/repos/${owner}/${repo}/contents/posts.json?ref=${branch}`;
        const res = await fetch(url, {
            headers: {
                Authorization: `token ${token}`,
                Accept: 'application/vnd.github.v3+json'
            }
        });
        if (res.status === 404) return null;
        if (!res.ok) {
            const err = await res.json();
            throw new Error(err.message || `GitHub API 错误 ${res.status}`);
        }
        const data = await res.json();
        return data.sha;
    },

    /** 一键同步到 GitHub */
    async sync() {
        const config = this.getConfig();
        if (!config.token || !config.repo) {
            throw new Error('请先在「GitHub 设置」中配置仓库和令牌');
        }

        const owner = config.owner || 'Plonkloving';
        const repo = config.repo;
        const branch = config.branch || 'main';

        // 获取本地文章数据
        const posts = loadUserPosts();
        if (posts.length === 0) {
            throw new Error('暂无自定义文章可同步，请先添加文章');
        }

        // 编码内容（Base64）
        const jsonStr = JSON.stringify(posts, null, 2);
        const content = btoa(unescape(encodeURIComponent(jsonStr)));

        // 获取当前 SHA（文件存在时需要）
        const sha = await this.fetchSha(owner, repo, branch, config.token);

        // 构造提交
        const body = {
            message: '📝 同步博客文章',
            content: content,
            branch: branch
        };
        if (sha) body.sha = sha;

        const url = `https://api.github.com/repos/${owner}/${repo}/contents/posts.json`;
        const res = await fetch(url, {
            method: 'PUT',
            headers: {
                Authorization: `token ${config.token}`,
                Accept: 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (!res.ok) {
            const err = await res.json();
            throw new Error(err.message || '同步失败');
        }

        return true;
    },

    /** 从 GitHub 拉取最新数据到本地 */
    async pull() {
        try {
            const res = await fetch('posts.json?_=' + Date.now());
            if (res.ok) {
                const data = await res.json();
                // 替换本地数据
                saveUserPosts(data);
                return data.length;
            }
        } catch {}
        return -1;
    }
};

// ==================== 管理员认证 ====================

const AUTH_KEY = 'plonk_admin_auth';
const PWD_KEY = 'plonk_admin_pwd';

const Auth = {
    /** 检查是否已登录 */
    isLoggedIn() {
        return sessionStorage.getItem(AUTH_KEY) === '1';
    },

    /** 检查是否已设置密码 */
    hasPassword() {
        return !!localStorage.getItem(PWD_KEY);
    },

    /** 初始化登录流程 */
    init() {
        if (!document.getElementById('loginOverlay')) return; // 不在管理页

        if (this.isLoggedIn()) {
            this.showAdmin();
            return;
        }

        if (this.hasPassword()) {
            this.showLogin();
        } else {
            this.showSetup();
        }
    },

    /** 显示登录表单 */
    showLogin() {
        document.getElementById('loginOverlay').style.display = 'flex';
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('setupForm').style.display = 'none';
        document.getElementById('loginTitle').textContent = '管理员登录';
        document.getElementById('loginSubtitle').textContent = '请输入管理密码';
        document.getElementById('loginPassword').focus();
    },

    /** 显示首次设置表单 */
    showSetup() {
        document.getElementById('loginOverlay').style.display = 'flex';
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('setupForm').style.display = 'block';
        document.getElementById('loginTitle').textContent = '🎉 首次使用';
        document.getElementById('loginSubtitle').textContent = '请设置你的管理密码';
        document.getElementById('setupPassword').focus();
    },

    /** 登录验证 */
    login() {
        const input = document.getElementById('loginPassword');
        const stored = localStorage.getItem(PWD_KEY);
        const error = document.getElementById('loginError');

        if (!stored) {
            // 没有密码 → 跳转到设置
            this.showSetup();
            return false;
        }

        // 用 btoa 做简单编码比对（客户端静态方案，防君子不防小人）
        if (btoa(input.value) === stored) {
            sessionStorage.setItem(AUTH_KEY, '1');
            this.showAdmin();
            return false;
        }

        error.style.display = 'block';
        input.value = '';
        input.focus();
        return false;
    },

    /** 首次设置密码 */
    setup() {
        const pwd1 = document.getElementById('setupPassword').value;
        const pwd2 = document.getElementById('setupPassword2').value;
        const error = document.getElementById('setupError');

        if (pwd1.length < 4) {
            error.textContent = '密码至少 4 位字符';
            error.style.display = 'block';
            return false;
        }

        if (pwd1 !== pwd2) {
            error.textContent = '两次输入的密码不一致';
            error.style.display = 'block';
            return false;
        }

        // 保存编码后的密码
        localStorage.setItem(PWD_KEY, btoa(pwd1));
        sessionStorage.setItem(AUTH_KEY, '1');
        this.showAdmin();
        return false;
    },

    /** 退出登录 */
    logout() {
        if (!confirm('确定要退出管理后台吗？')) return;
        sessionStorage.removeItem(AUTH_KEY);
        document.getElementById('adminContent').style.display = 'none';
        document.getElementById('loginOverlay').style.display = 'flex';
        this.showLogin();
    },

    /** 登录成功 → 显示管理内容 */
    async showAdmin() {
        document.getElementById('loginOverlay').style.display = 'none';
        document.getElementById('adminContent').style.display = 'block';
        // 初始化管理功能（先加载远程数据）
        await Admin.init();
        generateCaptcha();
    },

    /** 打开修改密码弹窗 */
    showChangePassword() {
        document.getElementById('changePwdOverlay').style.display = 'flex';
        document.getElementById('oldPassword').value = '';
        document.getElementById('newPassword').value = '';
        document.getElementById('newPassword2').value = '';
        document.getElementById('changePwdError').style.display = 'none';
        document.getElementById('changePwdSuccess').style.display = 'none';
        document.getElementById('oldPassword').focus();
    },

    /** 关闭修改密码弹窗 */
    hideChangePassword() {
        document.getElementById('changePwdOverlay').style.display = 'none';
    },

    /** 修改密码 */
    changePassword() {
        const oldPwd = document.getElementById('oldPassword').value;
        const newPwd = document.getElementById('newPassword').value;
        const newPwd2 = document.getElementById('newPassword2').value;
        const error = document.getElementById('changePwdError');
        const success = document.getElementById('changePwdSuccess');

        error.style.display = 'none';
        success.style.display = 'none';

        const stored = localStorage.getItem(PWD_KEY);
        if (btoa(oldPwd) !== stored) {
            error.textContent = '当前密码错误';
            error.style.display = 'block';
            return false;
        }

        if (newPwd.length < 4) {
            error.textContent = '新密码至少 4 位字符';
            error.style.display = 'block';
            return false;
        }

        if (newPwd !== newPwd2) {
            error.textContent = '两次输入的新密码不一致';
            error.style.display = 'block';
            return false;
        }

        localStorage.setItem(PWD_KEY, btoa(newPwd));
        success.style.display = 'block';
        error.style.display = 'none';

        setTimeout(() => Auth.hideChangePassword(), 1500);
        return false;
    },

    /** 刷新验证码（用于 HTML 中 onclick 调用） */
    refreshCaptcha() {
        refreshCaptcha();
    }
};

// ==================== 首页文章渲染 ====================

function renderPosts() {
    const grid = document.getElementById('postsGrid');
    if (!grid) return;

    const allPosts = getPosts();

    if (allPosts.length === 0) {
        grid.innerHTML = `
            <div class="empty-posts">
                <span>📝</span>
                <p>还没有文章，快去 <a href="admin.html">管理后台</a> 发布第一篇吧！</p>
            </div>`;
        return;
    }

    // 判断哪些文章已同步到 GitHub
    const syncedIds = new Set(_remotePosts.map(p => p.id));
    const localIds = new Set(loadUserPosts().map(p => p.id));

    grid.innerHTML = allPosts.map(post => {
        let tagStyle, badge;
        if (post.isStatic) {
            // 内置静态文章：蓝色标签，无标记
            tagStyle = '';
            badge = '';
        } else if (syncedIds.has(post.id)) {
            // 已同步到 GitHub：琥珀色标签 + ✅
            tagStyle = 'style="background:#fef3c7;color:#d97706"';
            badge = ' ✅';
        } else if (localIds.has(post.id)) {
            // 本地新增未同步：琥珀色标签 + ☁️
            tagStyle = 'style="background:#fef3c7;color:#d97706"';
            badge = ' ☁️';
        } else {
            // 远程已有但本地无：琥珀色标签
            tagStyle = 'style="background:#fef3c7;color:#d97706"';
            badge = '';
        }
        return `
        <article class="post-card" data-post-id="${post.id}">
            ${post.cover ? `<div class="post-cover"><img src="${post.cover}" alt="${post.title}" loading="lazy"></div>` : ''}
            <span class="post-tag" ${tagStyle}>${post.tag}${badge}</span>
            <h3>${post.title}</h3>
            <p class="post-excerpt">${post.excerpt || '暂无摘要'}</p>
            <div class="post-meta">
                <span class="post-date">📅 ${post.date || '日期未填'}</span>
                <span class="post-link">阅读更多 →</span>
            </div>
        </article>`;
    }).join('');

    // 移除旧的事件监听（避免重复绑定）
    const oldClick = grid._postClickHandler;
    if (oldClick) grid.removeEventListener('click', oldClick);

    const clickHandler = (e) => {
        const card = e.target.closest('.post-card');
        if (card) {
            const postId = card.dataset.postId;
            openPostModal(postId);
        }
    };
    grid._postClickHandler = clickHandler;
    grid.addEventListener('click', clickHandler);
}

// ==================== 文章弹窗（全屏预览） ====================

/** 打开文章弹窗 */
function openPostModal(postId) {
    const allPosts = getPosts();
    const post = allPosts.find(p => p.id === postId);
    if (!post) return;

    const modal = document.getElementById('postModal');
    const body = document.getElementById('modalBody');
    if (!modal || !body) return;

    // 构建正文内容
    const hasContent = post.content && post.content.trim();
    const hasExternalUrl = post.url && post.url !== '#';

    body.innerHTML = `
        <div class="modal-header">
            <span class="modal-tag" style="${post.isStatic ? '' : 'background:#fef3c7;color:#d97706'}">${post.tag}</span>
            <span class="modal-date">📅 ${post.date || '日期未填'}</span>
        </div>
        <h1 class="modal-title">${post.title}</h1>
        ${post.cover ? `<div class="modal-cover"><img src="${post.cover}" alt="${post.title}"></div>` : ''}
        <div class="modal-excerpt">${post.excerpt || ''}</div>
        ${hasContent ? `<hr class="modal-divider"><div class="modal-content-body">${post.content}</div>` : ''}
        ${!hasContent ? '<p class="modal-empty">暂无正文内容</p>' : ''}
        <div class="modal-footer-actions">
            ${hasExternalUrl ? `<a href="${post.url}" target="_blank" rel="noopener" class="btn btn-primary">🔗 查看原文</a>` : ''}
        </div>
    `;

    // 显示弹窗（加一小段延迟触发 CSS 动画）
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

/** 关闭文章弹窗 */
function closePostModal(event) {
    const modal = document.getElementById('postModal');
    if (!modal) return;

    // 如果点击的是 overlay 本身（背景）或关闭按钮，才关闭
    if (event && event.target !== modal && !event.target.classList.contains('modal-close')) return;

    modal.classList.remove('open');
    document.body.style.overflow = '';

    // 等待动画结束后清空内容（节省内存）
    setTimeout(() => {
        if (!modal.classList.contains('open')) {
            document.getElementById('modalBody').innerHTML = '';
        }
    }, 300);
}

// 暴露到全局（HTML onclick 需要）
window.closePostModal = closePostModal;

/** 键盘快捷键：ESC 关闭弹窗 */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('postModal');
        if (modal && modal.classList.contains('open')) {
            modal.classList.remove('open');
            document.body.style.overflow = '';
            setTimeout(() => {
                if (!modal.classList.contains('open')) {
                    document.getElementById('modalBody').innerHTML = '';
                }
            }, 300);
        }
    }
});

// ==================== 联系表单 ====================

function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !subject || !message) {
            alert('请填写所有必填字段');
            return;
        }

        const mailtoSubject = encodeURIComponent(`[博客建议] ${subject}`);
        const mailtoBody = encodeURIComponent(
            `姓名: ${name}\n邮箱: ${email}\n\n消息内容:\n${message}`
        );
        window.location.href = `mailto:2938115711@qq.com?subject=${mailtoSubject}&body=${mailtoBody}`;

        form.style.display = 'none';
        document.getElementById('formSuccess').style.display = 'block';
    });
}

function resetForm() {
    const form = document.getElementById('contactForm');
    const success = document.getElementById('formSuccess');
    if (form && success) {
        form.reset();
        form.style.display = 'flex';
        success.style.display = 'none';
    }
}
window.resetForm = resetForm;

// ==================== 移动端菜单 ====================

function setupMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (!toggle || !navLinks) return;

    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });
}

// ================================================================
//  Admin — 文章管理后台
// ================================================================

const Admin = {
    // ---- 当前筛选/搜索状态 ----
    _searchTerm: '',
    _filterTag: '',

    /** 初始化管理后台 */
    async init() {
        if (!document.getElementById('articleForm')) return;

        // 从 GitHub 拉取远程文章到本地，让管理页看到已同步的数据
        await loadRemotePosts();
        if (_remotePosts.length > 0) {
            // 合并远程数据到 localStorage（保留本地已有文章不覆盖）
            const existing = loadUserPosts();
            const existingIds = new Set(existing.map(p => p.id));
            const newPosts = _remotePosts.filter(p => !existingIds.has(p.id));
            if (newPosts.length > 0) {
                saveUserPosts([...newPosts, ...existing]);
            }
        }

        this.bindForm();
        this.renderList();
        this.setDefaultDate();

        // 监听存储变化（其他标签页修改时同步）
        window.addEventListener('storage', () => this.renderList());
    },

    /** 设置日期默认值为今天 */
    setDefaultDate() {
        const el = document.getElementById('postDate');
        if (el && !el.value) {
            el.value = new Date().toISOString().slice(0, 10);
        }
    },

    /** 绑定表单提交事件 */
    bindForm() {
        const form = document.getElementById('articleForm');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.save();
        });
    },

    /** 获取表单数据 */
    getFormData() {
        return {
            title: document.getElementById('postTitle').value.trim(),
            tag: document.getElementById('postTag').value,
            date: document.getElementById('postDate').value,
            excerpt: document.getElementById('postExcerpt').value.trim(),
            url: document.getElementById('postURL').value.trim() || '#',
            cover: document.getElementById('postCover').value.trim(),
            content: document.getElementById('postContent').value.trim()
        };
    },

    /** 校验表单 */
    validate(data) {
        if (!data.title) { alert('请输入文章标题'); return false; }
        return true;
    },

    /** 验证码确认 */
    verifyCaptcha() {
        const input = document.getElementById('postCaptcha');
        const value = input.value.trim();
        if (value !== _currentCaptcha) {
            input.classList.add('captcha-error');
            alert('❌ 验证码错误');
            input.focus();
            setTimeout(() => input.classList.remove('captcha-error'), 3000);
            return false;
        }
        input.classList.remove('captcha-error');
        return true;
    },

    /** 保存（新建或更新） */
    save() {
        const data = this.getFormData();
        if (!this.validate(data)) return;

        // 验证码确认
        if (!this.verifyCaptcha()) return;

        let posts = loadUserPosts();
        const editId = document.getElementById('editId').value;

        if (editId) {
            // ---- 编辑已有文章 ----
            const idx = posts.findIndex(p => p.id === editId);
            if (idx !== -1) {
                posts[idx] = { ...posts[idx], ...data };
            }
        } else {
            // ---- 新建文章 ----
            data.id = genId();
            data.isStatic = false;
            posts.unshift(data);
        }

        saveUserPosts(posts);
        this.renderList();
        this.resetForm();

        alert(editId ? '✅ 文章已更新！' : '✅ 文章已发布！');
    },

    /** 清空表单 */
    resetForm() {
        document.getElementById('articleForm').reset();
        document.getElementById('editId').value = '';
        document.getElementById('formTitle').textContent = '新建文章';
        document.getElementById('submitBtn').textContent = '发布文章';
        document.getElementById('cancelBtn').style.display = 'none';
        this.setDefaultDate();
        // 重置验证码状态
        const captchaInput = document.getElementById('postCaptcha');
        if (captchaInput) {
            captchaInput.value = '';
            captchaInput.classList.remove('captcha-error');
        }
        refreshCaptcha();
    },

    /** 取消编辑 */
    cancelEdit() {
        this.resetForm();
    },

    /** 编辑文章：填充表单 */
    editPost(id) {
        const posts = loadUserPosts();
        const post = posts.find(p => p.id === id);
        if (!post) return;

        document.getElementById('editId').value = post.id;
        document.getElementById('postTitle').value = post.title;
        document.getElementById('postTag').value = post.tag;
        document.getElementById('postDate').value = post.date || '';
        document.getElementById('postExcerpt').value = post.excerpt || '';
        document.getElementById('postURL').value = post.url === '#' ? '' : post.url;
        document.getElementById('postCover').value = post.cover || '';
        document.getElementById('postContent').value = post.content || '';

        document.getElementById('formTitle').textContent = '编辑文章';
        document.getElementById('submitBtn').textContent = '保存修改';
        document.getElementById('cancelBtn').style.display = 'inline-block';

        // 滚动到表单
	        refreshCaptcha();
        document.querySelector('.admin-form-panel').scrollIntoView({ behavior: 'smooth' });
    },

    /** 删除单篇文章 */
    deletePost(id) {
        if (!confirm('确定要删除这篇文章吗？')) return;
        let posts = loadUserPosts();
        posts = posts.filter(p => p.id !== id);
        saveUserPosts(posts);
        this.renderList();
    },

    /** 渲染管理后台文章列表 */
    renderList() {
        const container = document.getElementById('adminPostList');
        if (!container) return;

        let posts = loadUserPosts();

        // 搜索过滤
        if (this._searchTerm) {
            const term = this._searchTerm.toLowerCase();
            posts = posts.filter(p =>
                p.title.toLowerCase().includes(term) ||
                (p.excerpt || '').toLowerCase().includes(term)
            );
        }

        // 标签过滤
        if (this._filterTag) {
            posts = posts.filter(p => p.tag === this._filterTag);
        }

        // 更新计数
        const countEl = document.getElementById('postCount');

        // IDs that are already synced to GitHub
        const syncedIds = new Set(_remotePosts.map(p => p.id));
        const total = loadUserPosts().length;
        if (countEl) countEl.textContent = `${total} 篇（筛选后 ${posts.length} 篇）`;

        if (posts.length === 0) {
            container.innerHTML = `
                <div class="admin-empty">
                    ${loadUserPosts().length === 0
                        ? '<span>📝</span><p>还没有自定义文章，在左侧新建一篇吧！<br><small>内置的示例文章在首页自动展示，你添加的文章会排在它们前面。</small></p>'
                        : '<span>🔍</span><p>没有匹配的文章，试试其他搜索词。</p>'}
                </div>`;
            return;
        }

        container.innerHTML = posts.map(post => `
            <div class="admin-post-item">
                <div class="admin-post-info">
                    <span class="admin-post-tag" style="background:#fef3c7;color:#d97706">${post.tag}</span>
                    ${syncedIds.has(post.id)
                      ? '<span class="admin-sync-badge synced">✅ 已同步</span>'
                      : '<span class="admin-sync-badge unsynced">☁️ 未同步</span>'}
                    <h4>${post.title}</h4>
                    <div class="admin-post-meta">
                        <span>📅 ${post.date || '未填'}</span>
                        ${post.excerpt ? `<span>${post.excerpt.slice(0, 50)}${post.excerpt.length > 50 ? '...' : ''}</span>` : ''}
                        ${post.content ? '<span>📄 有正文</span>' : '<span style="color:#94a3b8">无正文</span>'}
                    </div>
                </div>
                <div class="admin-post-actions">
                    <button class="btn-sm btn-sm-edit" onclick="Admin.editPost('${post.id}')">✏️ 编辑</button>
                    <button class="btn-sm btn-sm-delete" onclick="Admin.deletePost('${post.id}')">🗑 删除</button>
                </div>
            </div>
        `).join('');
    },

    /** 搜索文章 */
    searchPosts(term) {
        this._searchTerm = term;
        this.renderList();
    },

    /** 按标签筛选 */
    filterByTag(tag) {
        this._filterTag = tag;
        this.renderList();
    },

    // ---- 导出 / 导入 ----

    /** 导出 JSON 文件 */
    exportJSON() {
        const posts = loadUserPosts();
        if (posts.length === 0) {
            alert('暂无自定义文章可导出。');
            return;
        }

        const blob = new Blob([JSON.stringify(posts, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `blog-posts-${new Date().toISOString().slice(0, 10)}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    },

    /** 导入 JSON 文件 */
    importJSON(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                if (!Array.isArray(data)) throw new Error('格式错误');

                const valid = data.every(p =>
                    p.title && p.id && p.tag
                );
                if (!valid) throw new Error('部分数据缺少必要字段');

                let existing = loadUserPosts();
                const existingIds = new Set(existing.map(p => p.id));
                const newPosts = data.filter(p => !existingIds.has(p.id));

                if (newPosts.length === 0) {
                    alert('导入的数据与现有文章完全重复。');
                    return;
                }

                existing = [...newPosts, ...existing];
                saveUserPosts(existing);
                this.renderList();
                alert(`✅ 成功导入 ${newPosts.length} 篇文章！`);
            } catch (err) {
                alert('❌ 导入失败：文件格式不正确。\n' + err.message);
            }
        };
        reader.readAsText(file);

        event.target.value = '';
    },

    /** 清空所有自定义文章 */
    clearAll() {
        if (!confirm('⚠️ 确定要删除所有自定义文章吗？此操作不可撤销！')) return;
        if (!confirm('再次确认：真的要全部删除吗？')) return;
        saveUserPosts([]);
        this.renderList();
    },

    // ---- GitHub 同步 ----

    /** 显示同步结果弹窗 */
    setSyncStatus(icon, title, desc, isError) {
        const overlay = document.getElementById('syncResultOverlay');
        const iconEl = document.getElementById('syncResultIcon');
        const titleEl = document.getElementById('syncResultTitle');
        const descEl = document.getElementById('syncResultDesc');
        const btn = document.getElementById('syncResultBtn');
        if (!overlay) return;

        iconEl.textContent = icon;
        titleEl.textContent = title;
        descEl.textContent = desc;
        descEl.style.color = isError ? '#dc2626' : 'var(--text-secondary)';
        overlay.style.display = 'flex';

        if (isError) {
            btn.textContent = '知道了';
            btn.style.display = 'inline-block';
        } else {
            btn.style.display = 'none';
            // 自动关闭
            setTimeout(() => { overlay.style.display = 'none'; }, 2500);
        }
    },

    /** 关闭同步结果弹窗 */
    closeSyncResult() {
        document.getElementById('syncResultOverlay').style.display = 'none';
    },

    /** 一键同步到 GitHub */
    async syncToGitHub() {
        this.setSyncStatus('⏳', '正在同步...', '请稍候，正在推送到 GitHub');
        try {
            await GitSync.sync();
            await loadRemotePosts();
            this.setSyncStatus('✅', '同步成功！', '文章已推送到 GitHub 仓库，所有访问者可见');
        } catch (err) {
            this.setSyncStatus('❌', '同步失败', err.message, true);
        }
    },

    /** 从 GitHub 拉取 */
    async pullFromGitHub() {
        this.setSyncStatus('⏳', '正在拉取...', '请稍候，正在从 GitHub 获取数据');
        try {
            const count = await GitSync.pull();
            if (count >= 0) {
                this.renderList();
                this.setSyncStatus('✅', '拉取成功！', '共拉取 ' + count + ' 篇文章');
            } else {
                this.setSyncStatus('⚠️', '拉取完成', '没有获取到新数据，请检查仓库中是否有 posts.json', true);
            }
        } catch (err) {
            this.setSyncStatus('❌', '拉取失败', err.message, true);
        }
    },

    /** 打开 GitHub 设置 */
    showGitSettings() {
        const overlay = document.getElementById('gitSettingsOverlay');
        const config = GitSync.getConfig();
        document.getElementById('gitToken').value = config.token || '';
        document.getElementById('gitRepo').value = config.repo || '';
        document.getElementById('gitOwner').value = config.owner || '';
        document.getElementById('gitBranch').value = config.branch || '';
        document.getElementById('gitSettingsStatus').style.display = 'none';
        overlay.style.display = 'flex';
    },

    /** 关闭 GitHub 设置 */
    hideGitSettings() {
        document.getElementById('gitSettingsOverlay').style.display = 'none';
    },

    /** 保存 GitHub 配置 */
    saveGitSettings() {
        const config = {
            token: document.getElementById('gitToken').value.trim(),
            repo: document.getElementById('gitRepo').value.trim(),
            owner: document.getElementById('gitOwner').value.trim() || 'Plonkloving',
            branch: document.getElementById('gitBranch').value.trim() || 'main'
        };
        if (!config.token || !config.repo) {
            alert('请填写 Token 和仓库名');
            return false;
        }
        GitSync.saveConfig(config);
        const status = document.getElementById('gitSettingsStatus');
        status.textContent = '✅ 配置已保存！';
        status.style.display = 'block';
        setTimeout(() => Admin.hideGitSettings(), 1200);
        return false;
    }
};

// 暴露到全局（供 HTML 内联事件使用）
window.Auth = Auth;
window.Admin = Admin;

// ================================================================
//  页面初始化
// ================================================================

document.addEventListener('DOMContentLoaded', async () => {
    // 从 GitHub 加载远程文章（所有访问者共享）
    await loadRemotePosts();
    renderPosts();
    setupContactForm();
    setupMobileMenu();
    // 管理页认证（非管理页自动跳过）
    Auth.init();
});
