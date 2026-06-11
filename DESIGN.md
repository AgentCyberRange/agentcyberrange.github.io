# ExploitBench — Frontend Design Specification

## 概览

**风格定位**：Academic Brutalist Minimal — 学术报告感的极简主义，带有暖调纸质质感。没有花哨的装饰，依靠排版层次和精准留白建立视觉秩序。整体氛围：严肃、可信、克制。

---

## 色彩系统 (Color System)

### 背景色

| Token | 色值 | 用途 |
|---|---|---|
| `--bg-page` | `#F2EFE9` | 页面整体背景，暖米白，接近旧纸张色 |
| `--bg-card` | `#EFEFEA` | 卡片/局部区域背景（略深于页面背景） |
| `--bg-overlay` | `#1A1A18` | 暗色 overlay（推测用于 dark mode） |

### 文字色

| Token | 色值 | 用途 |
|---|---|---|
| `--text-primary` | `#1A1A18` | 主标题、正文主色，接近纯黑但偏暖 |
| `--text-secondary` | `#6B6560` | 副文本、说明文字（带暖灰色调） |
| `--text-muted` | `#9C9590` | 更弱的提示信息、meta 信息 |
| `--text-link` | `#5C3D2E` | 链接色，深棕红，低饱和 |

### 强调色

| Token | 色值 | 用途 |
|---|---|---|
| `--accent-rust` | `#8B4A3A` | Hero 标题局部高亮色，锈红/赤褐 |
| `--accent-brown` | `#6B3C2A` | CTA 主按钮背景色，深棕 |
| `--accent-brown-hover` | `#5A3022` | 主按钮 hover 状态 |

### 边框色

| Token | 色值 | 用途 |
|---|---|---|
| `--border-default` | `#D8D4CE` | 默认边框，暖灰 |
| `--border-subtle` | `#E5E1DB` | 更弱的分隔线、背景网格线 |

### 背景装饰网格

页面右上方有一个浅色网格图案（类似坐标纸），由细线组成：

- 网格线色：`rgba(180, 174, 165, 0.35)` 左侧渐隐，右侧较清晰
- 网格间距：约 `40px × 40px`
- 仅出现在 hero 区域右半侧，营造技术/学术氛围

---

## 字体系统 (Typography)

### 字体家族

页面使用的是一套经典衬线 + 等宽的组合，风格接近学术论文排版：

| 用途 | 字体 | 特征 |
|---|---|---|
| 主标题 / Hero | **Georgia** 或 serif 系 | 衬线字体，字重较重，字形饱满 |
| 导航 / UI 文字 | **系统 sans-serif**（接近 `-apple-system` 或 `DM Sans`） | 无衬线，干净 |
| 代码标签（`v8-bench · v0`） | **等宽字体 monospace** | 细节处使用 monospace 显示版本号 |
| 正文 | 无衬线，可能同导航字体 | 行高宽松，阅读舒适 |

Hero 标题使用 serif 字体，与 body 的 sans-serif 形成对比。局部强调文字同字体但颜色为 `--accent-rust`。

### 字体尺寸规范

| 层级 | 估算尺寸 | 字重 | 行高 |
|---|---|---|---|
| Hero H1 | `~64px` (桌面) | `700–800` | `1.1` |
| Lead paragraph | `~20–22px` | `400` | `1.6` |
| Body paragraph | `~15–16px` | `400` | `1.65` |
| Nav items | `~14px` | `400–500` | — |
| Tag badge | `~12px` monospace | `400` | — |
| Footer / attribution | `~13px` | `400` | — |

---

## 间距与布局 (Spacing & Layout)

### 页面结构

```text
┌─────────────────────────────────────────────────┐
│  Navbar (full width, border-bottom)             │
├─────────────────────────────────────────────────┤
│                                                 │
│  Content Area (max-width ~860px, left-aligned)  │
│  ┌──────────────────────────────────────────┐   │
│  │ [Badge]                                  │   │
│  │ [Logo + Brand Name]                      │   │
│  │ [H1: Hero Title]                         │   │
│  │ [Lead paragraph]                         │   │
│  │ [Secondary paragraph]                    │   │
│  │ [Detail paragraph]                       │   │
│  │ [CTA buttons]                            │   │
│  │ [Attribution / by line]                  │   │
│  └──────────────────────────────────────────┘   │
│                        [Grid decoration →→→]    │
└─────────────────────────────────────────────────┘
```

### 间距 token（估算）

| Token | 值 | 用途 |
|---|---|---|
| `--space-xs` | `4px` | 内联小间距 |
| `--space-sm` | `8px` | badge 内 padding |
| `--space-md` | `16px` | 段落间距 |
| `--space-lg` | `32px` | 模块间距 |
| `--space-xl` | `64px` | section 顶部留白 |
| `--space-xxl` | `96px` | hero 区顶部留白 |

### 内容最大宽度

- 页面整体：`max-width: 1200px`
- 文字内容区：`max-width: ~55ch`
- 左侧对齐，桌面左边距约 `64px`

---

## 导航栏 (Navbar)

```text
[Logo Icon] exploitbench · benchmark results    [match] [extend]  Blog  Cite  [GitHub] [Avatar] [Dark]
```

- 高度：`~56px`
- 背景：`#F2EFE9`（同页面背景，无阴影）
- 底部边框：`1px solid var(--border-subtle)`
- Logo 字体：sans-serif，`font-weight: 600`
- 副标题：`color: var(--text-secondary)`，字重 `400`

### Tab 切换（match / extend）

- 容器：`border: 1px solid var(--border-default)`，`border-radius: 6px`，`padding: 2px`
- 激活 tab：`background: var(--bg-page)`，带轻微 `box-shadow`，字重加粗
- 非激活 tab：透明背景，`color: var(--text-secondary)`

---

## 组件规范 (Components)

### Badge（版本标签）

```text
v8-bench · v0
```

- 样式：`border: 1px solid var(--border-default)`，`border-radius: 999px`
- 内边距：`4px 12px`
- 字体：monospace，`12px`
- 颜色：`var(--text-secondary)`，背景透明

### Hero 标题

```html
<h1>
  Real exploitation
  <span class="accent">is a ladder</span>.
</h1>
```

- 主色：`var(--text-primary)`
- `.accent` 色：`var(--accent-rust)` `#8B4A3A`
- 字体：serif，`~64px`，`font-weight: 800`
- 无下划线，无其他装饰

### CTA 按钮

**主按钮**

- 背景：`var(--accent-brown)` `#6B3C2A`
- 文字色：`#FFFFFF`
- `border-radius: 6px`
- `padding: 10px 20px`
- `font-size: 14px`，`font-weight: 500`
- hover：背景加深 `#5A3022`

**次按钮**

- 背景：透明
- 边框：`1px solid var(--border-default)`
- 文字色：`var(--text-primary)`
- 其余同主按钮尺寸

### 链接

- 颜色：`var(--text-link)` `#5C3D2E`
- 下划线：`text-decoration: underline`
- `text-underline-offset: 2px`
- hover：颜色加深

---

## 背景装饰细节

右上角网格（Grid Decoration）：

```css
.grid-decoration {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background-image:
    linear-gradient(var(--border-subtle) 1px, transparent 1px),
    linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px);
  background-size: 40px 40px;
  mask-image: linear-gradient(to right, transparent 0%, black 40%);
  opacity: 0.5;
  pointer-events: none;
}
```

---

## Dark Mode（推断）

| Token | Light | Dark（推断） |
|---|---|---|
| `--bg-page` | `#F2EFE9` | `#1A1A18` |
| `--text-primary` | `#1A1A18` | `#F2EFE9` |
| `--text-secondary` | `#6B6560` | `#9C9590` |
| `--accent-rust` | `#8B4A3A` | `#C46B52` |

---

## 设计原则总结

1. **暖调纸质感**：整个页面避免纯白，使用 `#F2EFE9` 这类暖米白，有印刷品质感。
2. **排版驱动层次**：不靠色块分区，靠字号、字重、颜色深浅建立视觉层次。
3. **克制的强调色**：锈红 `#8B4A3A` 只用在 hero 标题局部，其余地方极少出现，保持冲击力。
4. **左对齐内容**：内容左对齐，右侧留白配合网格装饰，形成非对称的视觉平衡。
5. **学术/技术信号**：monospace 标签、网格背景、byline 归属行，都在传递“这是严肃的研究成果”的信息。
