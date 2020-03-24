var documenterSearchIndex = {"docs":
[{"location":"api.html#API/Reference-1","page":"API/Reference","title":"API/Reference","text":"","category":"section"},{"location":"api.html#","page":"API/Reference","title":"API/Reference","text":"For now, here is a dump of all documented functions and types.","category":"page"},{"location":"api.html#Index-1","page":"API/Reference","title":"Index","text":"","category":"section"},{"location":"api.html#","page":"API/Reference","title":"API/Reference","text":"","category":"page"},{"location":"api.html#API/Reference-2","page":"API/Reference","title":"API/Reference","text":"","category":"section"},{"location":"api.html#","page":"API/Reference","title":"API/Reference","text":"Modules = [HCIToolbox]","category":"page"},{"location":"api.html#HCIToolbox.Mean","page":"API/Reference","title":"HCIToolbox.Mean","text":"Mean\n\nDesign using the mean of the cube\n\nExamples\n\njulia> cube = ones(30, 100, 100);\n\njulia> design(Mean, cube)\n(A = [1.0 1.0 … 1.0 1.0], w = LinearAlgebra.UniformScaling{Bool}(true), S = [1.0 1.0 … 1.0 1.0])\n\nSee Also\n\nMedian\n\n\n\n\n\n","category":"type"},{"location":"api.html#HCIToolbox.Median","page":"API/Reference","title":"HCIToolbox.Median","text":"Median\n\nDesign using the median of the cube\n\nExamples\n\njulia> cube = ones(30, 100, 100);\n\njulia> design(Median, cube)\n(A = [1.0 1.0 … 1.0 1.0], w = LinearAlgebra.UniformScaling{Bool}(true), S = [1.0 1.0 … 1.0 1.0])\n\nSee Also\n\nMean\n\n\n\n\n\n","category":"type"},{"location":"api.html#HCIToolbox.NMF","page":"API/Reference","title":"HCIToolbox.NMF","text":"NMF\n\nUse non-negative matrix factorization (NMF) to reduce data cube.\n\nUses NMF.nnmf for decomposition.\n\nArguments\n\nncomps::Int - The number of components to keep. Cannot be larger than the number of frames in the input cube (default).\n\nExamples\n\njulia> cube = ones(30, 100, 100);\n\njulia> design(NMF, cube)\n(A = [0.18699723925131992 0.0017227311439991433 … 0.25104857267542474 0.007639437531209008; 0.17892712604685682 0.0017227311439991433 … 0.5290547113213493 0.0039969810485154245; … ; 0.1791108604483525 0.3333726515006622 … 0.009151289339269827 0.0039969810485154245; 0.18321575873721374 0.3333726515006622 … 0.009151289339269827 2.90943813485493e-13], w = [4.706954006158167 4.706954006158167 … 4.706954006158167 4.706954006158167; 0.0 0.0 … 0.0 0.0; … ; 0.0 0.0 … 0.0 0.0; 0.0 0.0 … 0.0 0.0], S = [0.9999999998346566 0.9999999998346566 … 0.9999999998346566 0.9999999998346566; 1.0000000001363376 1.0000000001363376 … 1.0000000001363376 1.0000000001363376; … ; 1.0000000001296059 1.0000000001296059 … 1.0000000001296059 1.0000000001296059; 0.9999999999760179 0.9999999999760179 … 0.9999999999760179 0.9999999999760179])\n\njulia> design(NMF, cube, 5)\n(A = [0.18257421287124714 0.005547894341040443 … 0.09696771072251913 0.15665986349016803; 0.1825741813281496 0.0055478943410398615 … 0.012760078325461317 0.25756981304356596; … ; 0.18257415421552403 0.33337265150066164 … 0.006436229867279868 0.32699785187779695; 0.18257415421552403 0.33337265150066164 … 0.006436229867279868 0.32699785187779695], w = [5.47722321153941 5.47722321153941 … 5.47722321153941 5.47722321153941; 1.0094317927007388e-7 1.0094317927007388e-7 … 1.0094317927007388e-7 1.0094317927007388e-7; … ; 6.241103130392369e-8 6.241103130392369e-8 … 6.241103130392369e-8 6.241103130392369e-8; 1.7433266010891995e-6 1.7433266010891995e-6 … 1.7433266010891995e-6 1.7433266010891995e-6], S = [0.9999999999004122 0.9999999999004122 … 0.9999999999004122 0.9999999999004122; 1.0000000000166112 1.0000000000166112 … 1.0000000000166112 1.0000000000166112; … ; 1.0000000001164895 1.0000000001164895 … 1.0000000001164895 1.0000000001164895; 1.0000000001164895 1.0000000001164895 … 1.0000000001164895 1.0000000001164895])\n\n\n\n\n\n\n","category":"type"},{"location":"api.html#HCIToolbox.PCA","page":"API/Reference","title":"HCIToolbox.PCA","text":"PCA\n\nUse principal component analysis (PCA) to reduce data cube.\n\nUses MultivariateStats.PCA for decomposition. See MultivariateStats.fit(PCA; ...) for keyword arguments\n\nArguments\n\nncomps::Int - The number of components to keep. Cannot be larger than the number of frames in the input cube (default).\n\nExamples\n\njulia> cube = ones(30, 100, 100);\n\njulia> design(PCA, cube)\n(A = [-0.18257418583505536; -0.18257418583505536; … ; -0.18257418583505447; -0.18257418583505555], w = [-5.477225575051664 -5.477225575051664 … -5.477225575051664 -5.477225575051664], S = [1.0000000000000004 1.0000000000000004 … 1.0000000000000004 1.0000000000000004; 1.0000000000000004 1.0000000000000004 … 1.0000000000000004 1.0000000000000004; … ; 0.9999999999999956 0.9999999999999956 … 0.9999999999999956 0.9999999999999956; 1.0000000000000016 1.0000000000000016 … 1.0000000000000016 1.0000000000000016])\n\njulia> design(PCA, cube, 5)\n(A = [-0.18257418583505536; -0.18257418583505536; … ; -0.18257418583505447; -0.18257418583505555], w = [-5.477225575051664 -5.477225575051664 … -5.477225575051664 -5.477225575051664], S = [1.0000000000000004 1.0000000000000004 … 1.0000000000000004 1.0000000000000004; 1.0000000000000004 1.0000000000000004 … 1.0000000000000004 1.0000000000000004; … ; 0.9999999999999956 0.9999999999999956 … 0.9999999999999956 0.9999999999999956; 1.0000000000000016 1.0000000000000016 … 1.0000000000000016 1.0000000000000016])\n\n\n\n\n\n\n","category":"type"},{"location":"api.html#HCIToolbox.Pairet","page":"API/Reference","title":"HCIToolbox.Pairet","text":"Pairet{<:Union{PCA, NMF}}\n\n\n\n\n\n","category":"type"},{"location":"api.html#HCIToolbox.combine-Union{Tuple{AbstractArray{T,3}}, Tuple{T}} where T","page":"API/Reference","title":"HCIToolbox.combine","text":"combine(cube, [angles]; method=median)\n\nCombine all the frames of a cube using method. If angles are provided, will use derotate! before combining.\n\nNote that with angles this is slightly slower than doing combine(derotate!(cube, angles)), if you can overwrite the input.\n\nExamples\n\njulia> X = ones(2, 3, 3)\n2×3×3 Array{Float64,3}:\n[:, :, 1] =\n 1.0  1.0  1.0\n 1.0  1.0  1.0\n\n[:, :, 2] =\n 1.0  1.0  1.0\n 1.0  1.0  1.0\n\n[:, :, 3] =\n 1.0  1.0  1.0\n 1.0  1.0  1.0\n\njulia> combine(X)\n3×3 Array{Float64,2}:\n 1.0  1.0  1.0\n 1.0  1.0  1.0\n 1.0  1.0  1.0\n\njulia> combine(X, [0, 90])\n1×3×3 Array{Float64,3}:\n[:, :, 1] =\n 1.0  1.0  1.0\n\n[:, :, 2] =\n NaN  1.0  NaN\n\n[:, :, 3] =\n 1.0  1.0  1.0\n\n\n\n\n\n","category":"method"},{"location":"api.html#HCIToolbox.derotate!-Union{Tuple{T}, Tuple{AbstractArray{T,3},AbstractArray{T,1} where T}} where T<:AbstractFloat","page":"API/Reference","title":"HCIToolbox.derotate!","text":"derotate!(cube, angles)\n\nIn-place version of derotate\n\n\n\n\n\n","category":"method"},{"location":"api.html#HCIToolbox.derotate-Union{Tuple{T}, Tuple{AbstractArray{T,3},AbstractArray{T,1} where T}} where T","page":"API/Reference","title":"HCIToolbox.derotate","text":"derotate(cube, angles)\n\nRotates an array using the given angles in degrees.\n\nThis will rotate frame i counter-clockwise by the amount deg2rad(angles[i]).\n\nSee Also\n\nderotate!\nrotate\nrotate!\n\n\n\n\n\n","category":"method"},{"location":"api.html#HCIToolbox.design","page":"API/Reference","title":"HCIToolbox.design","text":"design(::Type{<:HCIAlgorithm}, cube, args...; kwargs...)\n\nCreate a design matrix and weights from the given cube. The args and kwargs will vary based on the design algorithm.\n\nReturns\n\nThe output of a design matrix will be a named tuple with 3 parameters:\n\nA - The design Matrix\nw - The weight vector (the transform of our data cube)\nS - The reconstruction of our data cube (usually A * w)\n\n\n\n\n\n","category":"function"},{"location":"api.html#HCIToolbox.expand-Tuple{AbstractArray{T,2} where T}","page":"API/Reference","title":"HCIToolbox.expand","text":"expand(matrix)\n\nGiven a matrix of size (n, z), returns a cube of size (n, x, x) where x=√z.\n\nWill throw an error if z is not a perfect square.\n\nExamples\n\njulia> X = ones(3, 4)\n3×4 Array{Float64,2}:\n 1.0  1.0  1.0  1.0\n 1.0  1.0  1.0  1.0\n 1.0  1.0  1.0  1.0\n\njulia> expand(X)\n3×2×2 Array{Float64,3}:\n[:, :, 1] =\n 1.0  1.0\n 1.0  1.0\n 1.0  1.0\n\n[:, :, 2] =\n 1.0  1.0\n 1.0  1.0\n 1.0  1.0\n\nSee Also\n\nflatten\n\n\n\n\n\n","category":"method"},{"location":"api.html#HCIToolbox.flatten-Union{Tuple{AbstractArray{T,3}}, Tuple{T}} where T","page":"API/Reference","title":"HCIToolbox.flatten","text":"flatten(cube)\n\nGiven a cube of size (n, x, y) returns a matrix with size (n, x * y) where each row is a flattened image from the cube.\n\nExamples\n\njulia> X = ones(3, 2, 2)\n3×2×2 Array{Float64,3}:\n[:, :, 1] =\n 1.0  1.0\n 1.0  1.0\n 1.0  1.0\n\n[:, :, 2] =\n 1.0  1.0\n 1.0  1.0\n 1.0  1.0\n\njulia> flatten(X)\n3×4 Array{Float64,2}:\n 1.0  1.0  1.0  1.0\n 1.0  1.0  1.0  1.0\n 1.0  1.0  1.0  1.0\n\nSee Also\n\nexpand\n\n\n\n\n\n","category":"method"},{"location":"api.html#HCIToolbox.mask_inner!-Union{Tuple{T}, Tuple{AbstractArray{T,2},Any}} where T<:AbstractFloat","page":"API/Reference","title":"HCIToolbox.mask_inner!","text":"mask_inner!(::AbstractMatrix, npix; fill=NaN)\n\nIn-place version of mask_inner\n\n\n\n\n\n","category":"method"},{"location":"api.html#HCIToolbox.mask_inner-Tuple{AbstractArray{#s18,2} where #s18<:AbstractFloat,Any}","page":"API/Reference","title":"HCIToolbox.mask_inner","text":"mask_inner(::AbstractMatrix, npix; fill=NaN)\n\nMask the inner-circle of an image with radius npix with value fill.\n\nSee Also\n\nmask_inner!\n\n\n\n\n\n","category":"method"},{"location":"api.html#HCIToolbox.rotate!-Union{Tuple{T}, Tuple{AbstractArray{T,3},AbstractArray{T,1} where T}} where T<:AbstractFloat","page":"API/Reference","title":"HCIToolbox.rotate!","text":"rotate!(cube, angles)\n\nIn-place version of derotate\n\n\n\n\n\n","category":"method"},{"location":"api.html#HCIToolbox.rotate-Union{Tuple{T}, Tuple{AbstractArray{T,3},AbstractArray{T,1} where T}} where T","page":"API/Reference","title":"HCIToolbox.rotate","text":"rotate(cube, angles)\n\nRotates an array using the given angles in degrees.\n\nThis will rotate frame i clockwise by the amount deg2rad(angles[i]).\n\nSee Also\n\nrotate!\nderotate\nderotate!\n\n\n\n\n\n","category":"method"},{"location":"api.html#Base.reduce-Union{Tuple{T}, Tuple{Type{#s18} where #s18<:HCIToolbox.HCIAlgorithm,AbstractArray{T,3},AbstractArray{T,1} where T,Vararg{Any,N} where N}} where T","page":"API/Reference","title":"Base.reduce","text":"reduce(::Type{<:HCIAlgorithm}, cube, angles, args...; method=median, kwargs...)\n\nUsing a given HCIAlgorithm, will reduce the cube by first finding the approximate reconstruction with design and then derotating and combining (using whichever function specified by method). Any kwargs will be passed to design.\n\n\n\n\n\n","category":"method"},{"location":"index.html#","page":"Home","title":"Home","text":"CurrentModule = HCIToolbox","category":"page"},{"location":"index.html#HCIToolbox.jl-1","page":"Home","title":"HCIToolbox.jl","text":"","category":"section"},{"location":"index.html#","page":"Home","title":"Home","text":"(Image: GitHub) (Image: Build Status) (Image: Coverage) (Image: License)","category":"page"},{"location":"index.html#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"index.html#","page":"Home","title":"Home","text":"From Julia enter Pkg mode","category":"page"},{"location":"index.html#","page":"Home","title":"Home","text":"julia>]\n\n(1.3) pkg> add https://github.com/mileslucas/HCIToolbox.jl","category":"page"},{"location":"index.html#License-1","page":"Home","title":"License","text":"","category":"section"},{"location":"index.html#","page":"Home","title":"Home","text":"This work is distributed under the MIT \"expat\" license. See LICENSE for more information.","category":"page"}]
}
