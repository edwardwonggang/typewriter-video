import React from "react";
import {
    AbsoluteFill,
    Img,
    staticFile,
} from "remotion";
import { EditorWindow } from "./EditorWindow";
import { LayoutPreset, LANDSCAPE } from "./layout";
import { Theme, darkEditorTheme } from "./themes";
import { SoundPack, TextSegment, TypewriterText } from "./TypewriterText";

const TEXT_SEGMENTS: TextSegment[] = [
    {
        text: "# 《龙族》：一部把青春疼痛写进屠龙史诗的小说\n\n",
        mode: "burst",
        file: "README.md",
        language: "markdown",
    },
    {
        text: "如果只用一句话概括《龙族》，它并不只是“少年去打败恶龙”的故事，",
        mode: "normal",
        ghostText: "它更像一部把青春、宿命、孤独和燃烧感揉进现代都市奇幻里的长篇作品。",
        ghostPauseFrames: 42,
    },
    { text: "\n\n", mode: "burst" },
    {
        text: "它由江南创作，故事从一个看起来毫不起眼的少年 ",
        mode: "normal",
    },
    { text: "路明非", mode: "deliberate", imeInput: true },
    {
        text: " 开始。\n当别人都像天生的主角时，他更像那个总被忽略、总在迟疑、总觉得自己不够好的普通人。\n\n",
        mode: "normal",
    },
    {
        text: "也正因为这样，《龙族》的第一层吸引力从来不是设定炫不炫，\n而是它特别懂那种“我好像没有被世界选中”的感觉。\n\n",
        mode: "normal",
    },

    {
        text: "## 世界观速读\n\n",
        mode: "burst",
        file: "worldbuilding.md",
        language: "markdown",
    },
    {
        text: "- 混血种：体内流着龙血的人类，也是屠龙的主力。\n",
        mode: "burst",
    },
    {
        text: "- 卡塞尔学院：训练、筛选、组织这些人的秘密学院。\n",
        mode: "burst",
    },
    {
        text: "- 龙王：古老而强大的存在，既是神话，也是灾难。\n",
        mode: "burst",
    },
    {
        text: "- 言灵：血统与意志共同点燃的力量，也是人物气质的一部分。\n\n",
        mode: "burst",
    },
    {
        text: "《龙族》的厉害之处，在于它把这些超自然设定塞进了现代城市、校园生活、豪门家族和秘密组织之间，\n于是你会觉得这个世界离现实很近，却随时可能裂开一道通往神话的缝。\n\n",
        mode: "normal",
    },

    {
        text: "export const coreCast = [\n",
        mode: "burst",
        file: "src/core-cast.ts",
        language: "ts",
    },
    {
        text: "  { name: \"路明非\", role: \"主角\", keyword: \"自卑、犹豫、被命运推着往前走\" },\n",
        mode: "burst",
    },
    {
        text: "  { name: \"楚子航\", role: \"冷面天才\", keyword: \"克制、责任、无法愈合的伤口\" },\n",
        mode: "burst",
    },
    {
        text: "  { name: \"凯撒\", role: \"领袖型人物\", keyword: \"骄傲、光芒、天生站在聚光灯下\" },\n",
        mode: "burst",
    },
    {
        text: "  { name: \"诺诺\", role: \"关键推动者\", keyword: \"自由、锋利、看透别人也看透局势\" },\n",
        mode: "burst",
    },
    {
        text: "  { name: \"绘梨衣\", role: \"最让人心碎的角色之一\", keyword: \"纯净、孤独、短暂而耀眼\" },\n",
        mode: "burst",
    },
    { text: "];\n\n", mode: "burst" },
    {
        text: "这套人物关系之所以让人上头，是因为他们并不是功能化的“队友”，\n而是每个人都带着自己的缺口、自己的执念、自己的命运惯性。\n\n",
        mode: "normal",
        file: "README.md",
        language: "markdown",
    },

    {
        text: "## 为什么主角特别容易让人代入\n\n",
        mode: "burst",
    },
    {
        text: "路明非不是传统意义上的爽文男主。\n他会退缩，会怀疑自己，会在真正做决定之前反复问：为什么偏偏是我？\n\n",
        mode: "normal",
    },
    {
        text: "也正因为这样，当他终于往前走一步，观众感受到的不是“天选之子开挂”，\n而是一个普通人硬着头皮去承担不属于自己的重量。\n\n",
        mode: "normal",
    },
    {
        text: "很多人第一次看《龙族》，会以为它是一本 ",
        mode: "normal",
    },
    {
        text: "青春残酷物语",
        mode: "deliberate",
        strikeText: "热血屠龙爽文",
        strikeDelete: "select",
        strikePauseFrames: 24,
    },
    {
        text: "。\n因为它真正刺人的地方，往往不是谁赢了，而是谁失去了、谁错过了、谁没来得及说出口。\n\n",
        mode: "normal",
    },

    {
        text: "## 这部作品最有记忆点的，是它的情绪画面\n\n",
        mode: "burst",
        file: "notes/memory-points.md",
        language: "markdown",
    },
    {
        text: "你可能会记住暴雨、火焰、列车、海风、东京、樱花、教堂、刀锋和夜色。\n",
        mode: "normal",
    },
    {
        text: "这些画面之所以能留下来，不只是因为视觉效果强，\n更因为它们总和人物的命运绑在一起：越美的场景，往往越接近失去。\n\n",
        mode: "normal",
    },
    {
        text: "《龙族》很会制造那种感觉：你明知道前面不一定是好结局，\n可你还是会跟着人物一起冲过去，因为那一刻不冲，后面会后悔一辈子。\n\n",
        mode: "normal",
    },

    {
        text: "## 中文名字一出来，气质就立住了\n\n",
        mode: "burst",
        file: "characters.md",
        language: "markdown",
    },
    {
        text: "路明非、楚子航、凯撒、诺诺、绘梨衣、源稚生、源稚女。\n",
        mode: "normal",
        imeInput: true,
    },
    {
        text: "\n这些名字本身就很有辨识度，配合人物出场方式、背景故事和代表场面，\n很容易在读者脑海里形成一种“自带配乐”的印象。\n\n",
        mode: "normal",
    },

    {
        text: "## 《龙族》到底在讲什么\n\n",
        mode: "burst",
        file: "themes.md",
        language: "markdown",
    },
    {
        text: "表面上，它在讲屠龙、学院、血统、言灵和一场接一场的危机。\n",
        mode: "normal",
    },
    {
        text: "但往深一点看，它一直在讲三件事：\n\n",
        mode: "normal",
    },
    {
        text: "- [ ] 一个普通少年如何面对自卑。\n",
        mode: "burst",
        checkbox: { checkAfterFrames: 18 },
    },
    {
        text: "- [ ] 一群看似强大的人，为什么都在与失去对抗。\n",
        mode: "burst",
        checkbox: { checkAfterFrames: 18 },
    },
    {
        text: "- [ ] 当你终于握住力量时，你到底愿意付出什么代价。\n\n",
        mode: "burst",
        checkbox: { checkAfterFrames: 18 },
    },
    {
        text: "所以《龙族》最动人的地方，不在于“龙”本身，\n而在于它借龙讲人，借神话讲青春，借热血讲遗憾。\n\n",
        mode: "normal",
    },

    {
        text: "## 它适合什么样的读者\n\n",
        mode: "burst",
        file: "watch-guide.md",
        language: "markdown",
    },
    {
        text: "如果你喜欢学院体系、秘密组织、现代都市里的神话回声，\n那它很适合你。\n\n",
        mode: "normal",
    },
    {
        text: "如果你喜欢人物群像，喜欢那些明明很强却依然孤独的人，\n那它也很适合你。\n\n",
        mode: "normal",
    },
    {
        text: "如果你想看一部外表很燃、内里却总在反复追问“成长要不要靠失去来完成”的作品，\n那《龙族》大概率会打中你。\n\n",
        mode: "normal",
    },

    {
        text: "## 最后用一句话收尾\n\n",
        mode: "burst",
        file: "README.md",
        language: "markdown",
    },
    {
        text: "《龙族》不是简单的屠龙故事，",
        mode: "normal",
        ghostText: "它是很多人青春阶段的“孤独感说明书”。",
        ghostPauseFrames: 38,
    },
    { text: "\n\n", mode: "burst" },
    {
        text: "它让你记住的不只是龙王、学院和言灵，\n更是那些在黑夜里想要被看见、想要证明自己、想要留住重要之人的少年们。\n\n",
        mode: "normal",
    },
    {
        text: "如果你还没看过《龙族》，也许现在就是一个很好的开始。\n",
        mode: "thinking",
    },
];

interface TypewriterProps {
    theme?: Theme;
    layout?: LayoutPreset;
    soundPack?: SoundPack;
}

export const Typewriter: React.FC<TypewriterProps> = ({
    theme = darkEditorTheme,
    layout = LANDSCAPE,
    soundPack = "holy-pandas",
}) => {
    const [currentFile, setCurrentFile] = React.useState("README.md");
    const outerBg = theme.outer.bg;
    const isGradient = outerBg.includes("gradient");

    return (
        <AbsoluteFill
            style={{
                backgroundColor: isGradient ? undefined : outerBg,
                ...(isGradient && { backgroundImage: outerBg }),
            }}
        >
            {theme.outer.backgroundImage && (
                <Img
                    src={staticFile(theme.outer.backgroundImage)}
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: `blur(${theme.outer.bgBlur ?? 0}px) saturate(${theme.outer.bgSaturation ?? 1})`,
                        transform: "scale(1.05)",
                    }}
                />
            )}

            <AbsoluteFill
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <EditorWindow
                    title={currentFile}
                    theme={theme}
                    layout={layout}
                >
                    <TypewriterText
                        segments={TEXT_SEGMENTS}
                        startFrame={15}
                        onFileChange={setCurrentFile}
                        theme={theme}
                        soundPack={soundPack}
                        layout={layout}
                    />
                </EditorWindow>
            </AbsoluteFill>
        </AbsoluteFill>
    );
};
