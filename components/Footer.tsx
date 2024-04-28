import React from 'react'
import Section from './Section'
import Link from 'next/link'
import Logo from './Logo'

const Footer = () => {
    return (
        <footer className='bg-Background'>
            <Section className=''>
                <div className='grid grid-cols-12 md:py-16'>
                    <div className='col-span-5 -mt-8'><Logo /></div>
                    <div className='col-span-2 flex flex-col gap-5'>
                        <h6 className='text-Black font-bold text-base'>Quick link</h6>
                        <div className='flex flex-col gap-2'>
                            <Link href={'#'}>Home</Link>
                            <Link href={'#'}>About Us</Link>
                            <Link href={'#'}>Services</Link>
                            <Link href={'#'}>Solutions</Link>
                        </div>
                    </div>
                    <div className='col-span-2 flex flex-col gap-5'>
                        <h6 className='text-Black font-bold text-base'>Service</h6>
                        <div className='flex flex-col gap-2'>
                            <Link href={'#'}>Home</Link>
                            <Link href={'#'}>About Us</Link>
                            <Link href={'#'}>Services</Link>
                            <Link href={'#'}>Solutions</Link>
                        </div>
                    </div>
                    <div className='col-span-3 flex flex-col gap-5'>
                        <h6 className='text-Black font-bold text-base'>Cantact info</h6>
                        <div className='flex flex-col gap-2'>
                            <Link href={'#'}>ensome@info.co.us</Link>
                            <Link href={'#'}>+1 601-201-5580</Link>
                            <div>1642 Washington Avenue, Jackson, MS, Mississippi, 39201</div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:py-10 py-6 border-t border-Helper-blue-3 flex justify-between'>
                    <div className='flex gap-6'>
                        <Link href="#">Privacy policy</Link>
                        <Link href="#">Terms of us</Link>
                    </div>
                    <div>© 2022 Ensome. All Rights Reserved.</div>
                </div>
            </Section>
        </footer>
    )
}

export default Footer