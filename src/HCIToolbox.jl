module HCIToolbox

export derotate,
       derotate!,
       cube,
       matrix,
       collapse,
       collapse!,
       mask_circle!,
       mask_circle,
       mask_annulus!,
       mask_annulus,
       normalize_par_angles, 
       normalize_par_angles!


# Utilities for dealing with cubes like derotating and median combining
include("morphology.jl")

# Utilities for mask design
include("masking.jl")
include("angles.jl")
include("psf.jl")

end
