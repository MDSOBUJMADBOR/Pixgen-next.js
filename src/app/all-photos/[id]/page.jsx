import Image from 'next/image';
import React from 'react';
import { Heart, Download, Calendar, Hash, Copy } from "lucide-react";
import Link from 'next/link';

const PhotoDetailsPage =async ({params}) => {
const {id} = await params;
const res = await fetch("https://pixgen-next-js.vercel.app/data.json")
const photos = await res.json()
console.log(photos);
const photo = photos.find(p => p.id == id)

          return (
       <div className="min-h-screen bg-gray-100 p-6">
      {/* Back */}
      <Link href={"/all-photos"}><button className="mb-4 text-sm font-semibold cursor-p text-gray-600 hover:text-black">
        ← Back to Gallery
      </button></Link>

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Image */}
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
            <Image
              src={photo.imageUrl}
              alt={photo.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Right Side */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">{photo.title}</h1>

            {/* badges */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                {photo.category}
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                {photo.model}
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                {photo.resolution}
              </span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 p-4 rounded-xl flex items-center gap-3">
                <Heart className="text-red-500" />
                <div>
                  <p className="text-xs text-gray-500">Likes</p>
                  <p className="font-bold">{photo.likes}</p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl flex items-center gap-3">
                <Download className="text-green-600" />
                <div>
                  <p className="text-xs text-gray-500">Downloads</p>
                  <p className="font-bold">{photo.downloads}</p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl flex items-center gap-3">
                <Calendar className="text-blue-500" />
                <div>
                  <p className="text-xs text-gray-500">Created</p>
                  <p className="font-bold">
                    {new Date(photo.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl flex items-center gap-3">
                <Hash className="text-purple-500" />
                <div>
                  <p className="text-xs text-gray-500">ID</p>
                  <p className="font-bold">#{photo.id}</p>
                </div>
              </div>
            </div>

            {/* Prompt */}
            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-semibold">Prompt</h2>
                <button
                  
                  className="text-xs flex items-center gap-1 text-blue-600"
                >
                  <Copy size={14} /> Copy
                </button>
              </div>
              <p className="text-gray-700 text-sm">{photo.prompt}</p>
            </div>

            {/* Tags */}
            <div>
              <h2 className="font-semibold mb-2">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {photo.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

          
            
          </div>
        </div>

        
      </div>
    </div>
    
          );
};

export default PhotoDetailsPage;