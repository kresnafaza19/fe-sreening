import React from 'react';

const Footer = () => {
    return (
        <div>

        <footer className="bg-gray-800 text-white py-4 text-center font-semibold">
            <h1 className="pb-2">Copyright (C) 2016. PT Company</h1>
            <div className="flex text-xs justify-center imgC">
                <img src="/fb.png" className="mr-3" alt=""/>
                <img src="/twitter.png" alt=""/>
            </div>
        </footer>
        <style>{`
            .imgC img{
                width: 20px;
            }
        `}</style>
        </div>
    );
}

export default Footer;