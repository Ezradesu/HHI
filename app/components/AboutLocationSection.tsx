"use client";

import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerPopup,
} from "@/components/ui/map";

const officeLocation = {
  latitude: -6.293377873149061,
  longitude: 106.8137246711648,
};

const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${officeLocation.latitude},${officeLocation.longitude}`;

export function AboutLocationSection() {
  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="bg-[#cd0303] px-[61px] py-[150px] text-[#fff5f5] max-lg:px-8 max-md:px-6 max-md:py-24"
    >
      <div className="mx-auto max-w-[1218px]">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-[100px]">
          <div>
            <p className="text-[18px] font-medium uppercase tracking-[0.12em] text-[#fff5f5]/75">
              Location
            </p>
            <h2
              id="location-heading"
              className="mt-5 max-w-[500px] text-[clamp(42px,5vw,64px)] font-normal leading-[1.02] tracking-[-0.035em]"
            >
              Temukan kami di Jakarta Selatan.
            </h2>
          </div>

          <div className="max-w-[600px] lg:pb-1">
            <p className="text-[22px] font-light leading-[1.4] text-[#fff5f5]/85 max-md:text-[19px]">
              Kami siap mendengarkan persoalan hukum Anda dan membicarakan
              langkah yang paling tepat untuk kebutuhan bisnis maupun personal.
            </p>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-3 border-b border-[#fff5f5] pb-2 text-[17px] font-medium transition-opacity hover:opacity-65 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fff5f5]"
            >
              Buka di Google Maps
              <ArrowTopRightIcon aria-hidden="true" width={18} height={18} />
            </a>
          </div>
        </div>

        <div className="relative mt-20 h-[480px] overflow-hidden border border-[#fff5f5]/25 bg-[#fff5f5] max-md:mt-12 max-md:h-[360px]">
          <Map
            aria-label="Peta lokasi kantor HHI"
            center={[officeLocation.longitude, officeLocation.latitude]}
            zoom={15}
            theme="light"
            className="h-full w-full"
          >
            <MapMarker
              latitude={officeLocation.latitude}
              longitude={officeLocation.longitude}
            >
              <MarkerContent>
                <span className="flex size-9 items-center justify-center rounded-full border-2 border-[#fff5f5] bg-[#cd0303] shadow-[0_8px_24px_rgba(80,0,0,0.35)]">
                  <span className="size-2 rounded-full bg-[#fff5f5]" />
                </span>
              </MarkerContent>
              <MarkerPopup
                closeButton
                className="bg-[#fff5f5] text-[#4c4c4c]"
                maxWidth="280px"
              >
                <p className="text-[15px] font-medium text-[#cd0303]">
                  Hidayat, Hendiry &amp; Indrawan
                </p>
                <p className="mt-1 text-[13px] leading-[1.4]">
                  -6.2933779, 106.8137247
                </p>
              </MarkerPopup>
            </MapMarker>
            <MapControls showCompass showFullscreen position="bottom-right" />
          </Map>
        </div>
      </div>
    </section>
  );
}
