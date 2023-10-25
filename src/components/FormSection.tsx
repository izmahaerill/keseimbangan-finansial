import { Card, Input, Typography } from "@material-tailwind/react";

export default function FormSection() {
  return (
    <>
      <div>
        <div>
          <Typography>Managemen Pengeluaran</Typography>
          <Typography>
            Manajemen keuangan adalah praktik mengelola dana dan sumber daya
            finansial untuk mencapai tujuan keuangan pribadi atau perusahaan.
          </Typography>
          <div>
            <Card color="transparent" shadow={false}>
              <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                  <Typography
                    variant="paragraph"
                    color="blue-gray"
                    className="-mb-3"
                  >
                    Nama Pengeluaran
                  </Typography>
                  <Input
                    crossOrigin={""}
                    size="lg"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography
                    variant="paragraph"
                    color="blue-gray"
                    className="-mb-3"
                  >
                    Kategori
                  </Typography>
                  <input type="text" />

                  <Typography
                    variant="paragraph"
                    color="blue-gray"
                    className="-mb-3"
                  >
                    Waktu Transaksi
                  </Typography>
                  <Input
                    crossOrigin={""}
                    type="date"
                    placeholder="Kategori"
                    className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    containerProps={{
                      className: "min-w-0",
                    }}
                    icon={<i className="fas fa-heart" />}
                  />
                  <Typography
                    variant="paragraph"
                    color="blue-gray"
                    className="-mb-3"
                  >
                    Jumlah Pengeluaran
                  </Typography>
                  <Input
                    crossOrigin={""}
                    type="number"
                    placeholder="Kategori"
                    className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    containerProps={{
                      className: "min-w-0",
                    }}
                  />
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
