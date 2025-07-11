import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';

export default function ListingItem({ listing }) {
  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
      <Link to={`/listing/${listing._id}`}>
        <img
          src={
            listing.imageUrls?.[0] ||
            'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg'
          }
          alt='listing cover'
          className='h-[220px] w-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out'
        />
        <div className='p-3 flex flex-col gap-2 w-full'>
          <p className='truncate text-lg font-semibold text-slate-700'>
            {listing.name}
          </p>

          <div className='flex items-center gap-1 text-sm text-gray-600'>
            <MdLocationOn className='h-4 w-4 text-green-700' />
            <p className='truncate w-full'>{listing.address}</p>
          </div>

          <p className='text-sm text-gray-600 line-clamp-2'>
            {listing.description}
          </p>

          <p className='text-slate-500 mt-2 font-semibold'>
            $
            {listing.offer
              ? listing.discountPrice.toLocaleString('en-US')
              : listing.regularPrice.toLocaleString('en-US')}
            {listing.type === 'rent' && ' / month'}
          </p>

          <div className='text-slate-700 flex gap-4 text-xs font-bold'>
            <span>
              {listing.bedrooms > 1
                ? `${listing.bedrooms} beds`
                : `${listing.bedrooms} bed`}
            </span>
            <span>
              {listing.bathrooms > 1
                ? `${listing.bathrooms} baths`
                : `${listing.bathrooms} bath`}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
