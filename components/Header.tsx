import Image from 'next/image'

const Header = () => {

    return (
        <div className=" shadow-md	pl-2 p-1" style={{borderBottom: 'solid 1px #d6d6d6', position: 'relative', top: '0px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
               <Image src='/images/CanadaLineLogo.png' width={100} height={100} alt='Canada Line Logo'/>    
               <h1 style={{fontSize: '2.5rem', fontWeight: 500, color: 'red'}}>Canada Line</h1>
        </div>
    )
}

export default Header;