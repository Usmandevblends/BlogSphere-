import React from 'react'

function TechBlog() {
  return (
    <>
      <section className="Techblog">
        <div className="container mx-auto">
          <div className="grid">
            <div className='blogimg flex flex-col items-center justify-center col-span-12'>
              <img className='blogimg-img' src="./Ai.jpg" alt="" />
              <h1 className=" text-3xl font-bold  mt-5 text-[#805aed]">The Future of AI</h1>
              <p className='mx-auto blogpra text-gray-600 mt-5'>AI is still developing, and its potential seems endless. Experts believe that in the future, we will see progress in general AI, where machines will be able to think and solve problems just like humans. Another exciting area is emotional intelligence in robots, where machines will be able to understand and respond to human emotions, making them more helpful in areas like healthcare and customer service.

                We may also see AI-powered smart cities, where technology is used to make cities run better. AI could help reduce traffic, save energy, improve public safety, and make city services more efficient.

                The future of AI looks very promising, with the ability to change industries like healthcare and transportation, and make life easier by improving technology to better meet human needs. As AI continues to grow, we can expect to see many new and exciting innovations.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TechBlog