import Swal from "sweetalert2";

export const AlertSuccess = (title) => {
  Swal.fire({
    title: title,
    icon: "success",
    draggable: true,
  });
};
