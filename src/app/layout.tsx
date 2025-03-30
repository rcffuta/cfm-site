import { Toaster } from 'react-hot-toast';
import '../styles/style.scss';
import '@/node_modules/react-modal-video/scss/modal-video.scss';
import { AuthProvider } from '../context/AuthContext';
import { AttendeeModel } from '../lib/nobox/structure/attendee';
import AttendeePill from '../components/common/AttendeePill';


export const metadata = {
    title: "Combined Family Meeting - Redeemed Christian Fellowship FUTA Chapter",
    description: "Powered By ICT RCFFTUA",
    icons: {
        icon: "/images/Logo/logo.png",
    },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
          <body>
              <AuthProvider >
                <AttendeePill/>
                {children}
              </AuthProvider>

              <Toaster
                  toastOptions={{
                      style: {
                          background:
                              "linear-gradient(90deg, rgba(189, 36, 223, 0.1) 0%, rgba(45, 106, 222, 0.1) 97.15%)",
                          color: "#fff",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                          borderRadius: "10px",
                          padding: "12px 16px",
                          fontSize: "16px",
                          backdropFilter: "blur(10px)",
                      },
                      loading: {
                          icon: "⏳",
                          style: {
                              background:
                                  "linear-gradient(90deg, rgba(189, 36, 223, 0.2) 0%, rgba(45, 106, 222, 0.2) 97.15%)",
                              color: "#ffffff",
                              border: "1px solid rgba(255, 255, 255, 0.3)",
                              animation: "pulse 1.5s infinite",
                          },
                      },
                      success: {
                          iconTheme: {
                              primary: "#2D6ADE",
                              secondary: "#fff",
                          },
                      },
                      error: {
                          iconTheme: {
                              primary: "#BD24DF",
                              secondary: "#fff",
                          },
                      },
                  }}
              />
          </body>
      </html>
  );
}
