export default function Page() {
  return (
    <div className='h-screen flex items-center justify-center'>
      <a
        href='https://sellercentral.amazon.com/apps/authorize/consent?application_id=amzn1.sp.solution.35f695c4-f99d-4526-8d38-37f0ca9d99dd&version=beta&state=stateexample'
        className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
      >
        Authorize
      </a>
    </div>
  );
}
