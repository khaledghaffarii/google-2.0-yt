import Image from 'next/image'
import { useRouter } from "next/router";
function Header() {
  const router = useRouter();
    return (
      <div>
        <header>
          <Image
            src="https://www.google.co.uk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            height={33}
            width={92}
            className="cursor-pointer"
            onClick={()=> router.push('/') }
          />
        </header>
      </div>
    );
}

export default Header
