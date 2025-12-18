import "./globals.css";
export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <html>
            <body>
                Global Layout
            {children}
            Global Footer
            </body>
        </html>
            
        
    );
}