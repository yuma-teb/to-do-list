
import { NextResponse, NextRequest } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Collection from '@/model/Collection';

export async function GET(request: NextRequest) {
  await connectDB();
  const resCollections = await Collection.find({});
  console.log(resCollections);
  return NextResponse.json({message: 'hello'})
}

export async function POST(request: NextRequest) {
  await connectDB();
  const { name, description } = await request.json();

}