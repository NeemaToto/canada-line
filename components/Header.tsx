import Image from 'next/image'
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function Header() {
    return (
        <header className=" shadow-md p-1 px-9" style={{ borderBottom: 'solid 1px #d6d6d6', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <div />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Image src='/images/CanadaLineLogo.png' width={100} height={100} alt='Canada Line Logo' />
                <h1 style={{ fontSize: '2.5rem', fontWeight: 500, color: 'red' }}>Canada Line</h1>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                <Link href='https://github.com/NeemaToto'><Icon icon="mdi:github" width="42" height="42" /></Link>
                <Link href='https://ca.linkedin.com/in/neema-totonchi'> <Icon icon="mdi:linkedin" width="42" height="42" /></Link>
            </div>
        </header>
    )
}
