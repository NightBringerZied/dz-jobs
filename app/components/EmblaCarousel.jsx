"use client"
import React, { useCallback } from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Slide1 from './Slide1'
const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === true
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  )

  return (
    <section className="embla bg-[#f6f7fb]">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
            <div className="embla__slide">
              <div className="embla__slide__number"><Slide1/></div>
            </div>
            <div className="embla__slide">
              <div className="embla__slide__number"><Slide1/></div>
            </div>
            <div className="embla__slide">
              <div className="embla__slide__number"><Slide1/></div>
            </div>
          
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot '.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
