export default function Contact() {
  return (
    <div className='flex flex-col justify-center items-center gap-10'>
      <h1 className='text-5xl font-semibold'>Contact Us</h1>

      <form className='flex flex-col gap-5'>
        <div className='flex gap-2'>
          <label
            htmlFor='name'
            className='text-xl'
          >
            Name:
          </label>
          <input
            type='text'
            id='name'
            name='name'
            required
          />
        </div>

        {/* <div className='flex gap-2'>
          <label
            htmlFor='email'
            className='text-xl'
          >
            Email:
          </label>
          <input
            type='email'
            id='email'
            name='email'
            required
          />
        </div> */}

        <div className='flex gap-2'>
          <label
            htmlFor='message'
            className='text-xl'
          >
            Message:
          </label>
          <textarea
            id='message'
            name='message'
            required
          ></textarea>
        </div>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Submit
        </button>
      </form>
    </div>
  );
}
