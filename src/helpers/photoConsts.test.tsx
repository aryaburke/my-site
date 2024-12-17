import {
  ALL_PHOTOS,
  Photo,
  PHOTO_PAGES,
  PHOTOS_OF_ME,
  TATTOOS,
} from "./photoConsts";

test("Assert all photos are included in photo pages", () => {
  let photoPagePhotos: Photo[] = [...TATTOOS, ...PHOTOS_OF_ME];
  PHOTO_PAGES.forEach((page) => {
    photoPagePhotos = photoPagePhotos.concat(page.photos);
  });
  expect(new Set(photoPagePhotos)).toEqual(new Set(Object.values(ALL_PHOTOS)));
});
