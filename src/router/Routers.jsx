import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import MainLayout from '../components/layouts/MainLayOut'


export default function Routers() {
   return useRoutes([
      {
         path: '',
         element: <MainLayout />,
         children: [

         ]
      },
   ])
}
