import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

function NewsLetterSub() {
  return (
    <div className=" mt-14 w-1/2 pt-3 backdrop-blur-sm">
      <h2 className="text-xl">Subscribe to the newsletter!</h2>
      <p className="text-sm italic">
        Subscribe to our newsletter and be the first to know about hot releases,
        exclusive offers, and tech trends! Stay updated, receive fresh and
        valuable content directly to your inbox. Don&apost miss the chance to
        stay ahead subscribe now!
      </p>
      <div className="mt-4 flex max-w-sm items-center space-x-2">
        <Input
          type="email"
          name="email"
          placeholder="Email"
          className="outline-none"
        />
        <Button type="submit" disabled>
          subscribe.
        </Button>
      </div>
    </div>
  )
}

export default NewsLetterSub
