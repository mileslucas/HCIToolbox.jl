var documenterSearchIndex = {"docs":
[{"location":"api/#API/Reference-1","page":"API/Reference","title":"API/Reference","text":"","category":"section"},{"location":"api/#","page":"API/Reference","title":"API/Reference","text":"For now, here is a dump of all documented functions and types.","category":"page"},{"location":"api/#Index-1","page":"API/Reference","title":"Index","text":"","category":"section"},{"location":"api/#","page":"API/Reference","title":"API/Reference","text":"","category":"page"},{"location":"api/#API/Reference-2","page":"API/Reference","title":"API/Reference","text":"","category":"section"},{"location":"api/#","page":"API/Reference","title":"API/Reference","text":"Modules = [HCIToolbox, HCIToolbox.Kernels]","category":"page"},{"location":"api/#HCIToolbox.collapse!-Union{Tuple{T}, Tuple{AbstractArray{T,3},AbstractArray{T,1} where T}} where T","page":"API/Reference","title":"HCIToolbox.collapse!","text":"collapse!(cube, angles; method=:deweight, fill=0)\n\nAn in-place version of the derotating collapse. The only difference is in this version the cube will be derotated in-place.\n\n\n\n\n\n","category":"method"},{"location":"api/#HCIToolbox.collapse-Union{Tuple{AbstractArray{T,3}}, Tuple{T}} where T","page":"API/Reference","title":"HCIToolbox.collapse","text":"collapse(cube; method=median, fill=0, degree=Linear())\ncollapse(cube, angles; method=:deweight, fill=0, degree=Linear())\n\nCombine all the frames of a cube using method. If angles are provided, will use derotate before combining.\n\nIf method is :deweight, the method of Bottom et al. 2017 will be used in which the combined image will be the derotated weighted sum of the frames weighted by the temporal variance. Keyword arguments will be passed to derotate.\n\nReferences\n\nBottom et al. 2017 \"Noise-weighted Angular Differential Imaging\"\n\nExamples\n\njulia> X = ones(2, 3, 3);\n\njulia> collapse(X)\n3×3 Array{Float64,2}:\n 1.0  1.0  1.0\n 1.0  1.0  1.0\n 1.0  1.0  1.0\n\njulia> collapse(X, [0, 90])\n3×3 Array{Float64,2}:\n 0.5  1.0  0.5\n 1.0  1.0  1.0\n 0.5  1.0  0.5\n\njulia> collapse(X, [0, 90], fill=NaN)\n3×3 Array{Float64,2}:\n NaN    1.0  NaN\n   1.0  1.0    1.0\n NaN    1.0  NaN\n\n\nSee Also\n\ncollapse!\n\n\n\n\n\n","category":"method"},{"location":"api/#HCIToolbox.construct-Tuple{AbstractArray{T,2} where T,Tuple{#s50,#s46} where #s46<:(AbstractArray{T,1} where T) where #s50<:(AbstractArray{T,1} where T)}","page":"API/Reference","title":"HCIToolbox.construct","text":"construct(::AbstractMatrix, size; A=1, pa=0, degree=Linear(), location...)\nconstruct(::AbstractMatrix, indices; A=1, pa=0, degree=Linear(), location...)\n\nConstructs a PSF at the given location using the given matrix via bilinear interpolation.\n\nIf indices are provided they will be used as the input grid. If size is provided the PSF will have the given size. It will have amplitude A and will be located at the given location (explained below) potentially rotated by an additional pa degrees clockwise. If no location is given, will assume the center of the frame. degree is the corresponding Interpolations.Degree for the B-Spline used to subsample the pixel values.\n\nCoordinate System\n\nx, y - Parsed as distance from the bottom-left corner of the image. Pixel convention is that (1, 1) is the center of the bottom-left pixel increasing right and up.\nr, theta or r, θ - Parsed as polar coordinates from the center of the image. theta is a position angle.\n\n\n\n\n\n","category":"method"},{"location":"api/#HCIToolbox.construct-Tuple{Function,Tuple{#s64,#s65} where #s65<:(AbstractArray{T,1} where T) where #s64<:(AbstractArray{T,1} where T)}","page":"API/Reference","title":"HCIToolbox.construct","text":"construct(kernel, size; A=1, pa=0, location...)\nconstruct(kernel, indices; A=1, pa=0, location...)\n\nConstructs a synthetic PSF using the given kernel function.\n\nThe kernel functions are expected to take the distance from the center of the PSF and return the density. Kernels contains common optical PSFs. These kernels are normalized such that the peak amplitude is 1.\n\nIf indices are provided they will be used as the input grid. If size is provided the PSF will have the given size. It will have amplitude A and will be located at the given location (explained below) potentially rotated by an additional pa degrees clockwise. If no location is given, will assume the center of the frame.\n\nCoordinate System\n\nx, y - Parsed as distance from the bottom-left corner of the image. Pixel convention is that (1, 1) is the center of the bottom-left pixel increasing right and up.\nr, theta or r, θ - Parsed as polar coordinates from the center of the image. theta is a position angle.\n\n\n\n\n\n","category":"method"},{"location":"api/#HCIToolbox.crop-Tuple{Any,Any}","page":"API/Reference","title":"HCIToolbox.crop","text":"crop(frame, size; center=center(frame), force=false)\ncrop(cube, size; center=center(cube), force=false)\n\nCrop a frame or cube to size. size can be a tuple or an integer, which will make a square crop. The indices will be relative to center. To avoid uneven (odd) cropping, we may change size. To disable this behavior, set force to true. To avoid allocations, consider cropview.\n\n\n\n\n\n","category":"method"},{"location":"api/#HCIToolbox.cropview-Tuple{AbstractArray{T,2} where T,Tuple}","page":"API/Reference","title":"HCIToolbox.cropview","text":"cropview(frame::AbstractMatrix, size; center=center(frame), force=false)\n\nCrop a frame to size, returning a view of the frame. size can be a tuple or an integer, which will make a square crop. The indices will be relative to center. To avoid uneven (odd) cropping, we may change size. To disable this behavior, set force to true.\n\nSee Also\n\ncrop\n\n\n\n\n\n","category":"method"},{"location":"api/#HCIToolbox.cropview-Union{Tuple{T}, Tuple{AbstractArray{T,3},Tuple}} where T","page":"API/Reference","title":"HCIToolbox.cropview","text":"cropview(cube::AbstractArray{T, 3}, size; center=center(cube), force=false)\n\nCrop a frame to size, returning a view of the frame. size can be a tuple or an integer, which will make a square crop. The indices will be relative to center. To avoid uneven (odd) cropping, we may change size. To disable this behavior, set force to true.\n\nSee Also\n\ncrop\n\n\n\n\n\n","category":"method"},{"location":"api/#HCIToolbox.derotate!-Union{Tuple{T}, Tuple{AbstractArray{T,3},AbstractArray{T,1} where T}} where T","page":"API/Reference","title":"HCIToolbox.derotate!","text":"derotate!(cube, angles; fill=0, degree=Linear())\n\nIn-place version of derotate which modifies cube.\n\n\n\n\n\n","category":"method"},{"location":"api/#HCIToolbox.derotate-Union{Tuple{T}, Tuple{AbstractArray{T,2},Any}} where T","page":"API/Reference","title":"HCIToolbox.derotate","text":"derotate(frame, angle; fill=0, degree=Linear())\n\nRotates frame counter-clockwise by angle, given in degrees. This is merely a convenient wrapper around ImageTransformations.imrotate.\n\n\n\n\n\n","category":"method"},{"location":"api/#HCIToolbox.derotate-Union{Tuple{T}, Tuple{AbstractArray{T,3},AbstractArray{T,1} where T}} where T","page":"API/Reference","title":"HCIToolbox.derotate","text":"derotate(cube, angles; fill=0, degree=Linear())\n\nRotates an array using the given angles in degrees.\n\nThis will rotate frame i counter-clockwise. Any values outside the original axes will be replaced with fill. If the given angles are true parallactic angles, the resultant cube will have each frame aligned with top pointing North. degree is the corresponding Interpolations.Degree for the B-Spline used to subsample the pixel values.\n\nExamples\n\njulia> X = zeros(1, 3, 3); X[1, 1, 2] = 1;\n\njulia> X[1, :, :]\n3×3 Array{Float64,2}:\n 0.0  1.0  0.0\n 0.0  0.0  0.0\n 0.0  0.0  0.0\n\njulia> derotate(X, [90])[1, :, :]\n3×3 Array{Float64,2}:\n 0.0  3.22941e-16  0.0\n 0.0  0.0          0.999991\n 0.0  0.0          0.0\n\nSee Also\n\nderotate!\n\n\n\n\n\n","category":"method"},{"location":"api/#HCIToolbox.expand-Tuple{AbstractArray{T,2} where T}","page":"API/Reference","title":"HCIToolbox.expand","text":"expand(matrix)\n\nGiven a matrix of size (n, z), returns a cube of size (n, x, x) where x=√z.\n\nWill throw an error if z is not a perfect square.\n\nExamples\n\njulia> X = ones(3, 4)\n3×4 Array{Float64,2}:\n 1.0  1.0  1.0  1.0\n 1.0  1.0  1.0  1.0\n 1.0  1.0  1.0  1.0\n\njulia> expand(X)[1, :, :]\n2×2 Array{Float64,2}:\n 1.0  1.0\n 1.0  1.0\n\nSee Also\n\nflatten\n\n\n\n\n\n","category":"method"},{"location":"api/#HCIToolbox.flatten-Union{Tuple{AbstractArray{T,3}}, Tuple{T}} where T","page":"API/Reference","title":"HCIToolbox.flatten","text":"flatten(cube)\n\nGiven a cube of size (n, x, y) returns a matrix with size (n, x * y) where each row is a flattened image from the cube.\n\nExamples\n\njulia> X = ones(3, 2, 2);\n\njulia> flatten(X)\n3×4 Array{Float64,2}:\n 1.0  1.0  1.0  1.0\n 1.0  1.0  1.0  1.0\n 1.0  1.0  1.0  1.0\n\nSee Also\n\nexpand\n\n\n\n\n\n","category":"method"},{"location":"api/#HCIToolbox.inject!-Tuple{AbstractArray{T,2} where T,Any}","page":"API/Reference","title":"HCIToolbox.inject!","text":"inject!(frame, ::PSFKernel; A=1, location...)\ninject!(frame, ::AbstractMatrix; A=1, degree=Linear(), location...)\n\nIn-place version of inject which modifies frame.\n\n\n\n\n\n","category":"method"},{"location":"api/#HCIToolbox.inject!-Union{Tuple{T}, Tuple{AbstractArray{T,3},Any}} where T","page":"API/Reference","title":"HCIToolbox.inject!","text":"inject!(cube, ::PSFKernel, [angles]; A=1, location...)\ninject!(cube, ::AbstractMatrix, [angles]; A=1, location...)\n\nIn-place version of inject which modifies cube.\n\n\n\n\n\n","category":"method"},{"location":"api/#HCIToolbox.inject-Tuple{AbstractArray{T,2} where T,Any}","page":"API/Reference","title":"HCIToolbox.inject","text":"inject(frame, ::PSFKernel; A=1, location...)\ninject(frame, ::AbstractMatrix; A=1, degree=Linear(), location...)\n\nInjects the given PSF kernel or image into frame with amplitude A. The location can be given in image or polar coordinates, following the coordinate convention below. If no location is given, will assume the center of the frame. For empirical PSFs, degree is the corresponding Interpolations.Degree for the B-Spline used to subsample the pixel values.\n\nCoordinate System\n\nx, y - Parsed as distance from the bottom-left corner of the image. Pixel convention is that (1, 1) is the center of the bottom-left pixel increasing right and up.\nr, theta or r, θ - Parsed as polar coordinates from the center of the image. theta is a position angle.\n\nnote: Note\nDue to the integral nature of array indices, frames or images with even-sized axes will have their center rounded to the nearest integer. This may cause unexpected results for small frames and images.\n\nExamples\n\njulia> inject(zeros(5, 5), ones(1, 1), A=2, x=2, y=1) # image coordinates\n5×5 Array{Float64,2}:\n 0.0  2.0  0.0  0.0  0.0\n 0.0  0.0  0.0  0.0  0.0\n 0.0  0.0  0.0  0.0  0.0\n 0.0  0.0  0.0  0.0  0.0\n 0.0  0.0  0.0  0.0  0.0\n\njulia> inject(zeros(5, 5), ones(3, 3), r=1.5, theta=90) # polar coords\n5×5 Array{Float64,2}:\n 0.0  0.0  0.0  0.0  0.0\n 0.0  0.0  0.0  0.0  0.0\n 0.0  0.0  0.0  0.0  0.0\n 0.0  1.0  1.0  1.0  0.0\n 0.0  1.0  1.0  1.0  0.0\n\n\n\n\n\n","category":"method"},{"location":"api/#HCIToolbox.inject-Union{Tuple{T}, Tuple{AbstractArray{T,3},Any}} where T","page":"API/Reference","title":"HCIToolbox.inject","text":"inject(cube, ::PSFKernel, [angles]; A=1, location...)\ninject(cube, ::AbstractMatrix, [angles]; A=1, degree=Linear(), location...)\n\nInjects A * img into each frame of cube at the position given by the keyword arguments. If angles are provided, the position in the keyword arguments will correspond to the img position on the first frame of the cube, with each subsequent repositioned img being rotated by -angles in degrees. This is useful for fake companion injection. If no location is given, will assume the center of each frame. For empirical PSFs, degree is the corresponding Interpolations.Degree for the B-Spline used to subsample the pixel values.\n\n\n\n\n\n","category":"method"},{"location":"api/#HCIToolbox.mask_annulus!-Tuple{AbstractArray{T,2} where T,Any,Any}","page":"API/Reference","title":"HCIToolbox.mask_annulus!","text":"mask_annulus!(::AbstractMatrix, npix_in, npix_out; fill=NaN)\n\nIn-place version of mask_annulus\n\n\n\n\n\n","category":"method"},{"location":"api/#HCIToolbox.mask_annulus-Tuple{AbstractArray{T,2} where T,Any,Any}","page":"API/Reference","title":"HCIToolbox.mask_annulus","text":"mask_annulus(::AbstractMatrix, npix_in, npix_out; fill=0)\n\nMask an annular region of an image with inner-radius npix_in, outer-radius npix_out with value fill. Note that the input type must be compatible with the fill value's type.\n\nSee Also\n\nmask_annulus!\n\n\n\n\n\n","category":"method"},{"location":"api/#HCIToolbox.mask_circle!-Tuple{AbstractArray{T,2} where T,Any}","page":"API/Reference","title":"HCIToolbox.mask_circle!","text":"mask_circle!(::AbstractMatrix, npix; fill=0)\nmask_circle!(::AbstractArray, npix; fill=0)\n\nIn-place version of mask_circle\n\n\n\n\n\n","category":"method"},{"location":"api/#HCIToolbox.mask_circle-Tuple{AbstractArray{T,2} where T,Any}","page":"API/Reference","title":"HCIToolbox.mask_circle","text":"mask_circle(::AbstractMatrix, npix; fill=0)\nmask_circle(::AbstractArray, npix; fill=0)\n\nMask the inner-circle of an image with radius npix with value fill. Note that the input type must be compatible with the fill value's type. If the input is a cube it will mask each frame individually.\n\nSee Also\n\nmask_circle!\n\n\n\n\n\n","category":"method"},{"location":"api/#HCIToolbox.normalize_par_angles!-Tuple{Any}","page":"API/Reference","title":"HCIToolbox.normalize_par_angles!","text":"normalize_par_angles!(angles)\n\nIn-place version of normalize_par_angles\n\n\n\n\n\n","category":"method"},{"location":"api/#HCIToolbox.normalize_par_angles-Tuple{Any}","page":"API/Reference","title":"HCIToolbox.normalize_par_angles","text":"normalize_par_angles(angles)\n\nEnsures parallactic angle list (in degrees) is positive monotonic with no jumps greater than 180°.\n\nExamples\n\njulia> normalize_par_angles([-10, 20, 190])\n3-element Array{Int64,1}:\n 350\n  20\n 190\n\n\n\n\n\n","category":"method"},{"location":"api/#HCIToolbox.shift_frame!-Union{Tuple{T}, Tuple{AbstractArray{T,3},Number,Number}} where T","page":"API/Reference","title":"HCIToolbox.shift_frame!","text":"shift_frame!(cube, dx, dy; fill=0)\nshift_frame!(cube, dpos; fill=0)\n\nIn-place version of shift_frame which modifies cube.\n\n\n\n\n\n","category":"method"},{"location":"api/#HCIToolbox.shift_frame-Union{Tuple{T}, Tuple{AbstractArray{T,2},Any,Any}} where T","page":"API/Reference","title":"HCIToolbox.shift_frame","text":"shift_frame(frame, dx, dy; fill=0)\nshift_frame(frame, dpos; fill=0)\n\nShifts frame by dx and dy with bilinear interpolation. If necessary, empty indices will be filled with fill.\n\nExamples\n\njulia> shift_frame([0 0 0; 0 1 0; 0 0 0], 1, -1)\n3×3 Array{Float64,2}:\n 0.0  0.0  1.0\n 0.0  0.0  0.0\n 0.0  0.0  0.0\n\njulia> shift_frame(ans, (-1, 1), fill=NaN)\n3×3 Array{Float64,2}:\n NaN    NaN    NaN\n   0.0    1.0  NaN\n   0.0    0.0  NaN\n\n\n\n\n\n","category":"method"},{"location":"api/#HCIToolbox.shift_frame-Union{Tuple{T}, Tuple{AbstractArray{T,3},Any,Any}} where T","page":"API/Reference","title":"HCIToolbox.shift_frame","text":"shift_frame(cube, dx, dy; fill=0)\nshift_frame(cube, dpos; fill=0)\n\nShift each frame of cube by dx and dy, which can be integers or vectors. The change in position can be given as a tuple, which can also be put into a vector to use across the cube. If a frame is shifted outside its axes, the empty indices will be filled with fill.\n\nSee Also\n\nshift_frame!\n\n\n\n\n\n","category":"method"},{"location":"api/#HCIToolbox.check_size-Tuple{Any,Any}","page":"API/Reference","title":"HCIToolbox.check_size","text":"HCIToolbox.check_size(frame_size, crop_size)\n\nGiven two image shapes, will adjust the output size to make sure even amounts are clipped off each side.\n\n\n\n\n\n","category":"method"},{"location":"api/#HCIToolbox.get_annulus_segments-NTuple{4,Any}","page":"API/Reference","title":"HCIToolbox.get_annulus_segments","text":"get_annulus_segments(data, inner_radius, width, [nsegments]; theta_init=0, scale_factor=1, mode=:index)\n\nReturns indices or values in segments of a centered annulus.\n\nModes\n\n:mask - returns a positive boolean mask for indexing\n:value - returns the data values indexed with the boolean mask\n:apply - returns the input data weighted by the boolean mask\n\n\n\n\n\n","category":"method"},{"location":"api/#HCIToolbox.Kernels","page":"API/Reference","title":"HCIToolbox.Kernels","text":"This module contains some synthetic PSF kernels.\n\nAvailable kernels\n\nKernels.Gaussian/Kernels.Normal\nKernels.Moffat\nKernels.AiryDisk\n\nExamples\n\nFitting a PSF Model\n\nHere is a quick example fitting a model PSF to data, retrieving a Kernels.PSFKernel. This example uses LossFunctions.jl and Optim.jl, so please see their documentation for further questions. There are many ways to fit a model, so the important things to recognize are how construct and the chosen PSFModel integrate into a standard-looking MLE optimization.\n\n# Create noisy Airy disk (slightly off-center) with A=24 and FWHM=10\nimg = construct(Kernels.AiryDisk(10), (101, 101),\n                A=24, r=0.2, theta=-10) .+ randn(101, 101)\n\n# Set up optimization problem: linear regression\nusing LossFunctions, Optim\nloss(y_pred) = value(L2DistLoss(), img, y_pred, AggMode.Sum()) # least-squares loss\n# if image is pre-centered, don't _need_ to fit position\n# use logarithmic transform to make sure fhwm and A are positive\nfunction objective(X)\n    log_fwhm, log_A, x, y = X\n    img_pred = construct(Kernels.AiryDisk(exp(log_fwhm)), size(img);\n                         A=exp(log_A), x=x, y=y)\n    return loss(img_pred)\nend\n# optimize using NelderMead\nX0 = Float64[0, 0, 51, 51]\nres = optimize(objective, X0, NelderMead())\n# OR leverage autodiff and higher order methods like LBFGS and Newton's method\nres_ad = optimize(objective, X0, Newton(); autodiff=:forward)\n\n# Set up the best fitting model\nfhwm_mle, psf_A_mle = exp.(Optim.minimizer(res_ad)[1:2])\npsf_model = Kernels.AiryDisk(fhwm_mle)\n\n\n\n\n\n","category":"module"},{"location":"api/#HCIToolbox.Kernels.AiryDisk","page":"API/Reference","title":"HCIToolbox.Kernels.AiryDisk","text":"Kernels.AiryDisk(fwhm)\n\nAn Airy disk. Guaranteed to work even at r=0.\n\nK(r) = leftfrac2J_1left(pi r right)pi rright^2 quad r approx fracd097Gamma\n\n  ┌────────────────────────────────────────┐\n1 │                  .'::                  │ AiryDisk(x)\n  │                 .' :':                 │\n  │                 :  : :                 │\n  │                :'  : ':                │\n  │                :   :  :                │\n  │               .'   :  ':               │\n  │               :    :   :               │\n  │              .'    :   ':              │\n  │              :     :    :              │\n  │             .:     :    '.             │\n  │             :      :     :             │\n  │            .'      :     ':            │\n  │            :       :      :.           │\n  │           :        :       :           │\n0 │..........:'        :        '..........│\n  └────────────────────────────────────────┘\n  -2fwhm                               2fwhm\n\n\n\n\n\n","category":"type"},{"location":"api/#HCIToolbox.Kernels.Gaussian","page":"API/Reference","title":"HCIToolbox.Kernels.Gaussian","text":"Kernels.Gaussian(fwhm)\nKernels.Normal(fwhm)\n\nA Gaussian kernel\n\nK(d) = expleft-4ln2left(fracdGammaright)^2right\n\n  ┌────────────────────────────────────────┐\n1 │                  .'::                  │ Gaussian(x)\n  │                 .: :'.                 │\n  │                 :  : :                 │\n  │                :'  : ':                │\n  │                :   :  :                │\n  │               .'   :  ':               │\n  │               :    :   :               │\n  │              .:    :   '.              │\n  │              :     :    :              │\n  │             .'     :    ':             │\n  │             :      :     :             │\n  │            .'      :     ':            │\n  │           .'       :      ':           │\n  │          .'        :       ':          │\n0 │.........''         :         ':........│\n  └────────────────────────────────────────┘\n  -2fwhm                               2fwhm\n\n\n\n\n\n","category":"type"},{"location":"api/#HCIToolbox.Kernels.Moffat","page":"API/Reference","title":"HCIToolbox.Kernels.Moffat","text":"Kernels.Moffat(fwhm)\n\nA Moffat kernel\n\nK(d) = left1 + left(fracdGamma2right)^2 right^-1\n\n  ┌────────────────────────────────────────┐\n1 │                  .::.                  │ Moffat(x)\n  │                  : ::                  │\n  │                 :' :':                 │\n  │                 :  : :.                │\n  │                :   :  :                │\n  │               .:   :  :.               │\n  │               :    :   :               │\n  │              .:    :   '.              │\n  │              :     :    '.             │\n  │             :      :     :.            │\n  │            :       :      :.           │\n  │          .'        :       ':          │\n  │       ..''         :         ':.       │\n  │ ....:''            :            ''.... │\n0 │''                  :                  '│\n  └────────────────────────────────────────┘\n  -2fwhm                               2fwhm\n\n\n\n\n\n","category":"type"},{"location":"api/#HCIToolbox.Kernels.Normal","page":"API/Reference","title":"HCIToolbox.Kernels.Normal","text":"Kernels.Gaussian(fwhm)\nKernels.Normal(fwhm)\n\nA Gaussian kernel\n\nK(d) = expleft-4ln2left(fracdGammaright)^2right\n\n  ┌────────────────────────────────────────┐\n1 │                  .'::                  │ Gaussian(x)\n  │                 .: :'.                 │\n  │                 :  : :                 │\n  │                :'  : ':                │\n  │                :   :  :                │\n  │               .'   :  ':               │\n  │               :    :   :               │\n  │              .:    :   '.              │\n  │              :     :    :              │\n  │             .'     :    ':             │\n  │             :      :     :             │\n  │            .'      :     ':            │\n  │           .'       :      ':           │\n  │          .'        :       ':          │\n0 │.........''         :         ':........│\n  └────────────────────────────────────────┘\n  -2fwhm                               2fwhm\n\n\n\n\n\n\n\n","category":"type"},{"location":"api/#HCIToolbox.Kernels.PSFKernel","page":"API/Reference","title":"HCIToolbox.Kernels.PSFKernel","text":"Kernels.PSFKernel <: Function\n\nA kernel used for defining a PSF.\n\nInterface\n\nRight now, each kernel has one function that returns the amplitude of the kernel given a Euclidean distance. The amplitude should be scaled appropriately such that the maximum value is 1.\n\n(kernel::PSFKernel)(dist::Number)::Number\n\n\n\n\n\n","category":"type"},{"location":"#","page":"Home","title":"Home","text":"CurrentModule = HCIToolbox","category":"page"},{"location":"#HCIToolbox.jl-1","page":"Home","title":"HCIToolbox.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"(Image: GitHub) (Image: Build Status) (Image: Coverage) (Image: License)","category":"page"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"From Julia enter Pkg mode","category":"page"},{"location":"#","page":"Home","title":"Home","text":"julia>]\n\n(1.3) pkg> add HCIToolbox","category":"page"},{"location":"#License-1","page":"Home","title":"License","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"This work is distributed under the MIT \"expat\" license. See LICENSE for more information.","category":"page"}]
}