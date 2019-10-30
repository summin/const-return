// onScroll = () => {
//     const run = (root) => {
//         let h = root[0]
//             .getElementsByClassName("sticky-hero")[0]
//             .getElementsByClassName("hero")[0]
//             .getElementsByTagName("h3")[0];
//         let c = root[0].scrollTop
//         h.style.bottom = "-" + c / 3 + "px"
//         h.style.opacity = (1 - (c / 160))
//     }
//     document.getElementsByClassName("content-fadable A")[0].getElementsByClassName("sticky-hero")[0]
//         && run(document.getElementsByClassName("content-fadable A"));
//     document.getElementsByClassName("content-fadable B")[0].getElementsByClassName("sticky-hero")[0]
//         && run(document.getElementsByClassName("content-fadable B"));
// }
// 
// 
// 
// state = {
//     scrollIndex: 0
// }
// 
// scrollIndexScale = 1;
// scrollIndexHeight;
// scrollIndexPaddingTop = 0;
// scrollIndexGrad1 = 0;
// scrollIndexGrad2 = 50;
// 
// componentDidUpdate() {
//     console.log("content updated")
//     setTimeout(() => {
//         this.scrollable = null;
//         this.scrollable = document.getElementsByClassName("hero")
//     }, 50);
// }
// 
// onScroll = (e) => {
//     if (e.target.scrollTop < 411) {
//         console.log(e.target.scrollTop)
//         this.scrollIndexScale = 1 - 1 / (410 / e.target.scrollTop)
//         this.scrollIndexPaddingTop = (e.target.scrollTop / 2.15) + "px"
//         this.scrollIndexGrad2 = 50 + e.target.scrollTop/8
//         this.scrollIndexGrad1 = e.target.scrollTop/4
//         for (let i = 0; i < this.scrollable.length; ++i) {
//             this.scrollable[i].getElementsByClassName("scrollTransform")[0].style.transform = "scale(" + this.scrollIndexScale + ")"
//             this.scrollable[i].getElementsByClassName("scrollTransform")[0].style.top = this.scrollIndexPaddingTop;
//             this.scrollable[i].style.backgroundImage 
//             = "linear-gradient(rgba(105, 105, 105, 0) " 
//             + this.scrollIndexGrad1 + "%, rgb(17, 58, 54) " 
//             + this.scrollIndexGrad2 + "%, rgba(105, 105, 105, 0) 100%)"
//         }
//     }
// }