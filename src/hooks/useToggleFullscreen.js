export default (ref) => async () => {
  if (!document) return

  if (!document.fullscreenElement) {
    // NORMAL browsers...
    if (ref.current.requestFullscreen) {
      await ref.current.requestFullscreen()
    }
    // Safari...
    else if (ref.current.webkitRequestFullscreen) {
      ref.current.webkitRequestFullscreen()
    }
  } else {
    document.exitFullscreen()
  }
}
