# 打字机动画视频生成器

基于 Remotion 框架的 VS Code 风格打字机动画视频生成工具，支持中文拼音输入、多种主题和高级特效。

## 项目简介

这是一个使用 Remotion + React + TypeScript 构建的视频生成项目，可以创建类似 VS Code 编辑器的打字机动画效果。特别适合制作编程教程、代码演示、技术分享视频。

### 主要特性

- 🎨 **8 种主题** - 深色编辑器、粉笔黑板、纸质笔记本、复古终端、聚光灯、LCD 终端、像素艺术等
- 🇨🇳 **中文支持** - 拼音输入法模拟、中文语法高亮
- ✨ **高级特效** - 删除效果、幽灵文本、复选框自动勾选、Emoji 表情
- 🎨 **手绘风格** - 集成 Excalidraw 绘图层
- 📐 **多布局** - 支持横屏 (1920x1080) 和竖屏 (1080x1920)
- 🎬 **专业输出** - 29.97fps NTSC 标准，与摄像机素材同步

## 技术栈

- **Remotion 4.0.431** - React 视频生成框架
- **React 19.2.4** - UI 框架
- **TypeScript** - 类型安全
- **roughjs** - 手绘风格图形
- **@remotion/google-fonts** - Google 字体支持

## 安装依赖

```bash
npm install
```

## 运行命令

```bash
# 打开 Remotion Studio（可视化编辑器）
npm run studio

# 渲染视频到 out/typewriter.mp4
npm run render

# 导出静态帧到 out/still.png
npm run still
```

## 视频合成

项目包含多个视频合成：

### 默认合成
- **Typewriter** - 默认打字机演示（深色编辑器主题，120秒）
- **ChineseDemo** - 中文演示（75秒）
- **ThemeShowcase** - 主题展示（30秒）
- **ExcalidrawDemo** - 绘图层演示（20秒）

### 主题变体
- Theme-DarkEditor
- Theme-ChalkBlackboard
- Theme-PaperNotebook
- Theme-RetroTerminal
- Theme-Spotlight
- Theme-LCDTerminal
- Theme-PixelArt

### 竖屏版本
- Typewriter-Portrait (9:16)
- Theme-DarkEditor-Portrait

## 示例输出

### 视频示例
项目包含已渲染的视频示例：

- **out/typewriter.mp4** - 完整打字机动画视频（7.7MB）
- **out/still.png** - 静态帧截图

默认演示内容为《龙族》小说介绍，展示了：
- Markdown 格式渲染
- 代码片段语法高亮
- 中文拼音输入效果
- 文件切换动画
- 多种打字模式（normal、burst、deliberate、thinking）

## 特效说明

### 打字模式
- **normal** - 普通打字效果
- **burst** - 瞬间显示（适合标题、代码块）
- **deliberate** - 缓慢打字（适合强调关键词）
- **thinking** - 思考状态

### 高级功能
- **imeInput** - 模拟中文输入法
- **ghostText** - 幽灵文本预览
- **strikeText** - 删除效果
- **checkbox** - 复选框自动勾选
- **file/language** - 文件名和语法高亮

## 主题系统

每个主题包含：
- **outer** - 外部背景（颜色、渐变、背景图）
- **editor** - 编辑器样式（背景、边框、阴影）
- **text** - 文本样式（字体、颜色、大小）
- **syntax** - 语法高亮配色
- **cursor** - 光标样式

## 文件结构

```
src/
├── Typewriter.tsx          # 主合成组件
├── EditorWindow.tsx        # 编辑器窗口
├── TypewriterText.tsx      # 打字机文本核心逻辑
├── ExcalidrawCanvas.tsx    # 手绘画布
├── themes.ts               # 主题定义
├── layout.ts               # 布局配置
├── syntaxHighlight.ts      # 语法高亮
├── pinyin-catalog.json     # 拼音目录
├── emoji-catalog.json      # Emoji 目录
└── drawing-types.ts        # 绘图类型定义
```

## 自定义内容

### 修改文本内容

编辑 `src/Typewriter.tsx` 中的 `TEXT_SEGMENTS` 数组：

```typescript
const TEXT_SEGMENTS: TextSegment[] = [
  {
    text: "你的文本内容",
    mode: "normal",
    file: "filename.md",
    language: "markdown",
  },
  // ...
];
```

### 创建自定义主题

在 `src/themes.ts` 中添加新主题：

```typescript
export const customTheme: Theme = {
  outer: { bg: "#your-color", ... },
  editor: { bg: "#your-color", ... },
  // ...
};
```

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！
