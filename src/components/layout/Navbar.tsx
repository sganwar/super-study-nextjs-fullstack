'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  School as SchoolIcon,
} from '@mui/icons-material';

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen(!mobileOpen);
  }, [mobileOpen]);

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Apps', path: '/products' },
    { text: 'Technology', path: '/technology' },
    { text: 'Contact', path: '/contact' },
  ];


  // Prevent body scroll when the mobile drawer is open
React.useEffect(() => {
  if (mobileOpen) {
 document.body.classList.add('scroll-lock');
document.documentElement.classList.add('scroll-lock'); // This targets the <html> element
  } else {
  document.body.classList.remove('scroll-lock');
document.documentElement.classList.remove('scroll-lock'); // This targets the <html> element
  }

  // Cleanup when component unmounts
  return () => {
  document.body.classList.remove('scroll-lock');
document.documentElement.classList.remove('scroll-lock'); // This targets the <html> element
  };
}, [mobileOpen]);


  // Drawer for mobile menu
  const drawer = (
    <Box className="navigation-drawer-section h-full" sx={{ textAlign: 'center' }}>
      <Box className="flex items-center justify-between py-3 px-3 border-b border-edu-primary">
        <Box className="flex items-center gap-2">
          <SchoolIcon className="text-edu-primary text-3xl" />
          <Typography variant="h6" className="text-edu-primary font-bold">
            Super Study
          </Typography>
        </Box>
        <IconButton
          aria-label="close drawer"
          onClick={handleDrawerToggle}
          className="!bg-white/80 !border !border-white !rounded-md !p-0 hover:bg-edu-primary/10 transition-colors"
        >
          <CloseIcon className="text-edu-primary !p-0" sx={{ height: '2rem', width: '2rem' }} />
        </IconButton>
      </Box>

      <List className="!pt-8 !px-4 flex flex-col items-center">
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            component={Link}
            href={item.path}
            onClick={handleDrawerToggle}
            sx={{ width: '90%' }}
            className={`mb-2 rounded-lg transition-all duration-300 hover:bg-edu-dark hover:text-white cursor-pointer ${
              pathname === item.path
                ? 'bg-edu-dark text-white'
                : 'text-edu-dark bg-white bg-opacity-100'
            }`}
          >
            <ListItemText
              primary={item.text}
              className="text-center"
              primaryTypographyProps={{ className: 'font-medium' }}
            />
          </ListItem>
        ))}
      </List>

      <Box className="absolute bottom-8 left-4 right-4">
        <Box className="card-edu text-center !p-3 !bg-[rgba(100, 100, 100, 0.5)] !rounded-md">
          <Typography
            variant="body2"
            className="text-edu-dark !font-mono tracking-tighter"
          >
            Donate and get super coupon
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        className="bg-white shadow-lg"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Toolbar className="px-4 md:px-8 flex justify-between relative">
          {/* 1. Logo/Title (Left Side) */}
          <Box className="flex items-center gap-3">
            <Link href="/">
              <SchoolIcon
                fontSize="large"
                className="text-edu-primary text-4xl cursor-pointer"
              />
            </Link>
            <Typography
              variant="h5"
              component={Link}
              href="/"
              className="text-edu-primary font-bold no-underline hover:text-edu-sky transition-colors duration-300 !font-minimal"
            >
              Super Study
            </Typography>
          </Box>

          {/* 2. Desktop Menu (Center) */}
          <Box className="hidden md:flex flex-1 justify-center gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.text}
                href={item.path}
                className={`px-4 py-2 rounded-lg transition-all duration-300 no-underline font-medium ${
                  pathname === item.path
                    ? 'bg-edu-primary text-white shadow-lg'
                    : 'text-edu-dark hover:bg-edu-light hover:text-edu-primary'
                }`}
              >
                {item.text}
              </Link>
            ))}
          </Box>

          {/* 3. Mobile Menu Button (Right Side) */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            className="flex md:!hidden !text-edu-primary !hover:bg-edu-light transition-all duration-300 ml-auto"
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* 4. Drawer for Mobile */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            boxShadow: 'black -2rem 0rem 8rem',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
