import { Github, Instagram, Mail, Twitter, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <>
      <div className="flex justify-between">
        <div className="space-y-3">
          <p>Links: </p>
          <div className="flex space-x-2">
            <Link href="https://github.com/scsvv/scsvv-s">
              <Github />
            </Link>
            <Link href="mailto:s.skorobohatov@gmail.com">
              <Mail />
            </Link>
            <Link href="https://www.instagram.com/xa.wav/">
              <Instagram />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
