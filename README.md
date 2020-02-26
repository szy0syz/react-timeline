# react-timeline

## Preview

![preview](./preview.png)

## Steps

* `timeline` 主容器 `flex`，不定宽度，中间那个柱子拿 `after` 伪类实现
* `timeline-item` 容器也是 `flex`，如何一左一右呢？
  * 先50%宽，再主轴 `flex-end`，为什么是 `end`，因为左边的要靠右，才是靠进中轴线啊！
  * `.timeline-item:nth-child(odd)` 偶数就在右边50%，主轴则 `flex-start`，交叉抽 `flex-end`
* 接下来照搬，小三角、内容 `p` 都是伪类odd选择改左右样式
