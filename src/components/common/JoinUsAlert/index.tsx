'use client'

import { Button } from '@/components/ui/Button'
import { useState } from 'react'
import {
  LuX as CloseIcon,
  LuArrowRight as ArrowRightIcon,
} from 'react-icons/lu'

export const JoinUsAlert = () => {
  const [show, setShow] = useState(true)

  if (!show) {
    return null
  }

  return (
    <div
      role="alert"
      className="lg:flex lg:items-center lg:justify-center px-4 py-4 lg:py-3 lg:order-first fixed bottom-0 inset-x-0 lg:sticky lg:top-0 lg:bottom-auto z-10 text-[1.125rem] leading-normal text-center bg-[#242424] text-white"
    >
      <button
        type="button"
        className="flex lg:hidden items-center justify-center mx-auto mb-5 text-base"
        tabIndex={0}
        onClick={() => {
          setShow(false)
        }}
      >
        <span className="block">Fechar</span>{' '}
        <CloseIcon className="block size-6" aria-hidden={true} />
      </button>

      <p className="max-w-[20rem] lg:max-w-none w-full lg:w-auto mx-auto lg:mx-0">
        Não limite sua criatividade, junte-se a família Blocks por apenas{' '}
        <strong>BRL 19,99</strong>
      </p>

      <p className="lg:ml-4 lg:shrink mt-4 lg:mt-0 text-left">
        <Button href="/" className="justify-between" block>
          <span className="block pr-4">Quero ser Premium</span>

          <ArrowRightIcon
            className="block size-6 shrink-0"
            aria-hidden={true}
          />
        </Button>
      </p>
    </div>
  )
}
