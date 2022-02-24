import LocomotiveScroll from "locomotive-scroll"
import { useEffect } from "react"

const useLocoScroll = function () {
  useEffect(() => {
    const scrollEl = document.querySelector("[data-scroll-container]")

    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
    })
  }, [])
}

export default useLocoScroll
