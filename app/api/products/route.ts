import { NextRequest, NextResponse } from 'next/server'

import ProductsServices from './services'


export async function GET(request: NextRequest) {
  return NextResponse.json({
    "products": ProductsServices.getAll()
  })
}