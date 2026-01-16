import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <html>
            <body>
                Global Layout
                <AuthProvider>
                    {children}
                </AuthProvider>
            Global Footer
            </body>
        </html>
            
        
    );
}