  import * as React from 'react';
  import Box from '@mui/material/Box';
  import Typography from '@mui/material/Typography';
  import { createTheme } from '@mui/material/styles';
  import DashboardIcon from '@mui/icons-material/Dashboard';
  import {
    AppProvider,
    type Session,
    type Navigation,
    Router,
  } from '@toolpad/core/AppProvider';
  import { DashboardLayout } from '@toolpad/core/DashboardLayout';
  import BarChartIcon from '@mui/icons-material/BarChart';
  import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
  import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
  import PaymentRoundedIcon from '@mui/icons-material/PaymentRounded';
  import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded';
  import MoneyOffCsredOutlinedIcon from '@mui/icons-material/MoneyOffCsredOutlined';
  import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
  import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
  import ImportExportOutlinedIcon from '@mui/icons-material/ImportExportOutlined';
  import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
  import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';
  import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
  import Setting from './Setting';
  // import { Stack } from '@mui/material';
  import logo from './assets/money.png'
  // import logo from '../src/assets/money.svg'
  console.log(logo); // Should print the path to the SVG
  const NAVIGATION: Navigation = [
    {
      segment: 'overview',
      title: 'Overview',
      icon: <DashboardIcon />,
    },
    {
      segment: 'transactions',
      title: 'Transactions',
      icon: <HistoryRoundedIcon />,
    },
    {
      segment: 'scheduled-transactions',
      title: 'Scheduled Transactions',
      icon: <BarChartIcon />,
    },
    {
      segment: 'accounts',
      title: 'Accounts',
      icon: <AccountBalanceRoundedIcon />,
    },
    {
      segment: 'credit-cards',
      title: 'Credit Cards',
      icon: <PaymentRoundedIcon />,
    },
    {
      segment: 'budgets',
      title: 'Budgets',
      icon: <CurrencyExchangeRoundedIcon />,
    },
    {
      segment: 'debts',
      title: 'Debts',
      icon: <MoneyOffCsredOutlinedIcon />,
    },
    {
      segment: 'charts',
      title: 'Charts',
      icon: <BarChartOutlinedIcon />,
    },
    {
      segment: 'calendar',
      title: 'Calendar',
      icon: <EventOutlinedIcon />,
    },
    {
      segment: 'import-export',
      title: 'Import/Export',
      icon: <ImportExportOutlinedIcon />,
    },
    {
      segment: 'preferences',
      title: 'Preferences',
      icon: <ManageAccountsOutlinedIcon />,
    },
    {
      segment: 'bank-synchronization',
      title: 'Bank Synchronization',
      icon: <SyncOutlinedIcon />,
    },
    {
      segment: 'settings',
      title: 'Settings',
      icon: <SettingsOutlinedIcon />,

    },
  ];



  const demoTheme = createTheme({
    cssVariables: {
      colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 600,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  function DemoPageContent({ pathname }: { pathname: string }) {
    if (pathname === '/settings') {
      return <Setting />; // Render the Setting component
    }

    // Default dashboard content for other paths
    return (
      <Box
        sx={{
          py: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography>Dashboard content for {pathname}</Typography>
      </Box>
    );
  }

  interface DemoProps {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window?: () => Window;
  }
  // function CustomAppTitle() {
  //   return (
  //     <Stack direction="row" alignItems="center" spacing={2}>
  //       <Typography variant="h5" color='info'>Expense Tracker</Typography>
  //     </Stack>
  //   );
  // }
  export default function DashboardLayoutAccount(props: DemoProps) {
    const { window } = props;
    const [pathname, setPathname] = React.useState('/dashboard');
    const router = React.useMemo<Router>(() => {
      return {
        pathname,
        searchParams: new URLSearchParams(),
        navigate: (path) => setPathname(String(path)),
      };
    }, [pathname]);


    const [session, setSession] = React.useState<Session | null>({
      user: {
        name: 'Bharat Kashyap',
        email: 'bharatkashyap@outlook.com',
        image: 'https://avatars.githubusercontent.com/u/19550456',
      },
    });

    const authentication = React.useMemo(() => {
      return {
        signIn: () => {
          setSession({
            user: {
              name: 'Bharat Kashyap',
              email: 'bharatkashyap@outlook.com',
              image: 'https://avatars.githubusercontent.com/u/19550456',
            },
          });
        },
        signOut: () => {
          setSession(null);
        },
      };
    }, []);

    // const router = useDemoRouter('/dashboard');

    // Remove this const when copying and pasting into your project.
    const demoWindow = window !== undefined ? window() : undefined;

    return (
      // preview-start
      <AppProvider
        session={session}
        authentication={authentication}
        navigation={NAVIGATION}
        router={router}
        theme={demoTheme}
        window={demoWindow}
      >
        <DashboardLayout disableCollapsibleSidebar
          branding={{
            logo: <img className='w-5 h-5' src={logo} alt="MUI logo" />,
            title: 'ExTra',
            // homeUrl: '/toolpad/core/introduction',
          }}
        >
          <DemoPageContent pathname={router.pathname} />
        </DashboardLayout>
      </AppProvider>
      // preview-end
    );
  }