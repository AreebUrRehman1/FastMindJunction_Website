export const mcqaData = {
  //YEARLY PAST PAPER 

  WPH11F22 : [ 
  {
    mainAnswer : `
    <div class="explanation">
      <h3>✅ Why is Option A correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> At \\( t = 6\\,\\mathrm{s} \\), the graph shows the student at a displacement of \\(2.0\,\\mathrm{m}\\). The velocity is the gradient (slope) of the displacement-time graph:
          \\[
          v = \\frac{\\Delta s}{\\Delta t}
          \\]
          The student moves from \\(-1.0\\,\\mathrm{m}\\) to \\(2.0\\,\\mathrm{m}\\) over \\(6\\,\\mathrm{s}\\), so:
          \\[
          \\Delta s = 2.0 - (-1.0) = 3.0\\,\\mathrm{m}
          \\]
          \\[
          v = \\frac{3.0}{6} = 0.5\\,\\mathrm{m\\,s^{-1}}
          \\]
          Therefore, the final displacement is \\(2.0\\,\\mathrm{m}\\) and the velocity is \\(0.5\\,\\mathrm{m\\,s^{-1}}\\).
        </li>
      </ul>
    </div>

    <div class="calculation">
      🧮 <strong>Calculation:</strong><br><br>
      Change in displacement:
      \\[
      \\Delta s = 2.0 - (-1.0) = 3.0\\,\\mathrm{m}
      \\]
      Time:
      \\[
      \\Delta t = 6\\,\\mathrm{s}
      \\]
      Velocity:
      \\[
      v = \\frac{3.0}{6} = 0.5\\,\\mathrm{m\\,s^{-1}}
      \\]
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option B – Incorrect (Wrong displacement):</strong>
        <p>Final displacement is \\(2.0\\,\\mathrm{m}\\), not \\(3.0\\,\\mathrm{m}\\).</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Wrong displacement and velocity):</strong>
        <p>Final displacement is not \\(5.0\\,\\mathrm{m}\\), and the velocity is not \\(2.0\\,\\mathrm{m\\,s^{-1}}\\).</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Wrong velocity):</strong>
        <p>Velocity is \\(0.5\\,\\mathrm{m\\,s^{-1}}\\), not \\(2.0\\,\\mathrm{m\\,s^{-1}}\\).</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Final displacement is the position read directly from the graph at the given time. Velocity is found using the change in displacement divided by the time taken!
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '1'
  },{
    mainAnswer: `
        <div class="explanation">
      <h3>✅ Why is Option D correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> Physical quantities can be classified as vectors or scalars based on their nature:
          <ul>
            <li><strong>Force</strong>: This is a vector quantity, as it has both magnitude and direction.</li>
            <li><strong>Mass</strong>: Mass is a scalar quantity because it only has magnitude and no direction.</li>
            <li><strong>Acceleration</strong>: This is also a vector quantity, as it describes a change in velocity in a particular direction.</li>
          </ul>
          Therefore, the correct classification is:
          \\[
          \\text{Force: vector, Mass: scalar, Acceleration: vector}
          \\]
          which matches Option D.
        </li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Wrong Classification):</strong>
        <p>Force is a vector, not a scalar, so this option is incorrect.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (Wrong Classification of Acceleration):</strong>
        <p>Acceleration is a vector, not a scalar, so this option is incorrect.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Wrong Classification of Mass):</strong>
        <p>Mass is a scalar, not a vector, so this option is incorrect.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Always remember that scalar quantities have only magnitude, whereas vector quantities have both magnitude and direction.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '2'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option A correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> In a velocity-time graph:
          <ul>
            <li>A positive, decreasing velocity means the particle is slowing down in the positive direction — displacement increases but at a decreasing rate (curves upwards and flattens).</li>
            <li>Constant velocity means linear displacement (straight line).</li>
            <li>Negative velocity means the particle moves in the opposite direction — displacement decreases.</li>
          </ul>
          Thus, the displacement-time graph should:
          <ul>
            <li>Curve upward initially (positive, decreasing velocity).</li>
            <li>Then become a straight line (constant positive velocity).</li>
            <li>Finally curve downward (negative velocity).</li>
          </ul>
          This matches the shape shown in Option A.
        </li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option B – Incorrect (No variation):</strong>
        <p>Shows no change in displacement when the particle is clearly moving.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Wrong curve shapes):</strong>
        <p>Shape is wrong for the sequence of positive to negative velocity.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Sudden jump, not smooth motion):</strong>
        <p>Displacement should vary smoothly, not with abrupt jumps.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Positive velocity means increasing displacement, negative velocity means decreasing displacement. The steeper the velocity, the steeper the displacement graph!
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '3'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option C correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> The problem gives the vertical and horizontal components of velocity, which are perpendicular to each other. The resultant velocity is found using the Pythagorean theorem:</li>
        <ul>
          <li>The magnitude of the resultant velocity \\( v \\) is given by: 
            \\[
            v = \\sqrt{v_{\\text{vertical}}^2 + v_{\\text{horizontal}}^2}
            \\]
            Substituting the values:
            \\[
            v = \\sqrt{5^2 + 8^2} = \\sqrt{25 + 64} = \\sqrt{89} 
            \\]
            Hence, the magnitude of the resultant velocity is \\( \\sqrt{8^2 + 5^2} \\), which matches Option C.
          </li>
        </ul>
        <li><strong>For the angle,</strong> we can use the tangent of the angle \\( \\theta \\) between the resultant velocity and the vertical component of the velocity:</li>
        <ul>
          <li>The angle \\( \\theta \\) is given by:
            \\[
            \\theta = \\tan^{-1} \\left( \\frac{v_{\\text{horizontal}}}{v_{\\text{vertical}}} \\right)
            \\]
            Substituting the values:
            \\[
            \\theta = \\tan^{-1} \\left( \\frac{8}{5} \\right)
            \\]
            Hence, the angle is \\( \\tan^{-1}(\\frac{8}{5}) \\), which matches Option C.
          </li>
        </ul>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Incorrect Formula for Magnitude):</strong>
        <p>This option incorrectly uses \\( \\sqrt{8^2 - 5^2} \\) for the magnitude, which is not applicable for finding the magnitude of the resultant velocity.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (Incorrect Formula for Angle):</strong>
        <p>This option incorrectly uses \\( \\sin^{-1} \\) instead of \\( \\tan^{-1} \\) for calculating the angle.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Incorrect Formula for Angle):</strong>
        <p>This option incorrectly uses \\( \\sin^{-1} \\) for calculating the angle, which is not the correct trigonometric function in this case.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> When dealing with perpendicular velocity components, always use the Pythagorean theorem to find the magnitude, and use \\( \\tan^{-1} \\) to find the angle.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '4'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option C correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> The formula for displacement \\( s \\) under constant acceleration from rest is:
          \\[
          s = \\frac{1}{2} a t^2
          \\]
          where:
          <ul>
            <li>\\( s \\) is the displacement (0.32 m),</li>
            <li>\\( a \\) is the acceleration due to gravity, and</li>
            <li>\\( t \\) is the time (0.63 s).</li>
          </ul>
        </li>
        <li>Rearranging the formula to solve for \\( a \\), we get:
          \\[
          a = \\frac{2s}{t^2}
          \\]
        </li>
        <li>Substituting the given values for displacement and time:
          \\[
          a = \\frac{2 \\times 0.32}{0.63^2}
          \\]
        </li>
        <li>Thus, Option C: \\( \\frac{2 \\times 0.32}{0.63^2} \\) is correct.</li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Wrong Formula):</strong>
        <p>This option lacks \\( t^2 \\) in the denominator and is not correct.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (Incorrect Denominator):</strong>
        <p>This option incorrectly uses \\( t^2 \\) in the denominator but fails to double the displacement.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Incorrect Formula):</strong>
        <p>This option uses the wrong formula and does not correctly account for the displacement's relationship with time squared.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Remember that the displacement due to constant acceleration from rest is proportional to the square of time, so always make sure to use the correct formula and units!
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '5'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option B correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> According to Stokes' law, the terminal velocity \\(v_t\\) of a small sphere falling through a viscous liquid is given by:
          \\[
          v_t = \\frac{2r^2 (\\rho - \\rho_l)g}{9\\eta}
          \\]
          where:
          <ul>
            <li>\\(r\\) is the radius of the sphere</li>
            <li>\\(\\rho\\) is the density of the sphere</li>
            <li>\\(\\rho_l\\) is the density of the liquid</li>
            <li>\\(g\\) is the acceleration due to gravity</li>
            <li>\\(\\eta\\) is the viscosity of the liquid</li>
          </ul>
          <br>
          If the viscosity \\(\\eta\\) increases, the terminal velocity \\(v_t\\) decreases for the same mass. 
          Therefore, the gradient of the terminal velocity vs mass graph would be smaller for a more viscous liquid.
        </li>
      </ul>
    </div>

    <div class="calculation">
      🧮 <strong>Calculation (Conceptual):</strong><br><br>
      Since \\( v_t \\propto \\frac{1}{\\eta} \\), an increase in \\(\\eta\\) reduces \\(v_t\\) for the same mass.<br>
      Hence, the slope (gradient) of the graph becomes smaller for a liquid of greater viscosity.
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Greater gradient):</strong>
        <p>Higher viscosity resists motion more, reducing terminal velocity, not increasing it.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Variable gradient):</strong>
        <p>The relationship remains linear; it does not become variable unless other factors like diameter change.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Same gradient):</strong>
        <p>Viscosity directly affects terminal velocity, so the gradient cannot stay the same when viscosity changes.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Remember, terminal velocity decreases when the liquid becomes thicker (more viscous)!
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '6'
  },{
    mainAnswer : `
    <div class="explanation">
      <h3>✅ Why is Option B correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> According to Newton's Third Law of Motion, when one object exerts a force on a second object, the second object exerts an equal and opposite force on the first object. In this case:</li>
        <li>The person exerts a force \\( Q \\) on the trolley (action), and the trolley exerts an equal and opposite force \\( R \\) on the person (reaction). This pair of forces follows Newton's Third Law.</li>
        <li>These forces are equal in magnitude and opposite in direction, which makes \\( Q \\) and \\( R \\) a Newton's Third Law pair.</li>
      </ul>
    </div>

    <div class="calculation">
      🧮 <strong>Explanation for the Correct Pair:</strong><br><br>
      The force \\( Q \\) is exerted by the person on the trolley, and the force \\( R \\) is the reaction force exerted by the trolley on the person. By Newton's Third Law, these forces form a pair because they are equal in magnitude and opposite in direction.
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Wrong Force Pair):</strong>
        <p>The force \\( P \\), exerted by the floor on the person, and \\( R \\), exerted by the trolley on the person, do not form a Newton's Third Law pair. They are forces from different interactions (floor-person and trolley-person) and not equal and opposite to each other.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Unrelated Forces):</strong>
        <p>The force \\( Q \\), exerted by the person on the trolley, and the drag force \\( S \\), do not form a Newton's Third Law pair. The drag force is an external force acting on the trolley, not a reaction to \\( Q \\).</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (No Third Law Pair):</strong>
        <p>The force \\( P \\), exerted by the floor on the person, and the drag force \\( S \\), do not form a Newton's Third Law pair. They act on different objects and are not related by action-reaction pairs.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Newton's Third Law pairs involve forces that act on two different objects and are equal in magnitude, opposite in direction, and occur due to the interaction between the objects.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '7'
  },{
    mainAnswer : `
    <div class="explanation">
      <h3>✅ Why is Option A correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> The force required to break a wire depends on the cross-sectional area of the wire. The tensile strength of the material is constant, so the force required to break the wire is directly proportional to the cross-sectional area, which is proportional to the square of the diameter.</li>
        <li>The formula for the tensile force required to break the wire is given by:</li>
        <ul>
          <li><strong>Force</strong> \\( F = \\sigma A \\), where \\( \\sigma \\) is the tensile strength and \\( A \\) is the cross-sectional area.</li>
        </ul>
        <li>The cross-sectional area of a wire is given by:</li>
        <ul>
          <li><strong>Area</strong> \\( A = \\pi d^2/4 \\), where \\( d \\) is the diameter of the wire.</li>
        </ul>
        <li>If the second wire has twice the diameter, its cross-sectional area will increase by a factor of four (since area is proportional to the square of the diameter). Therefore, the force required to break the second wire will be four times greater than the force required for the first wire.</li>
        <li>Thus, the force required to break the second wire is \\( 4T \\), which matches Option A.</li>
      </ul>
    </div>

    <div class="calculation">
      🧮 <strong>Calculation:</strong><br><br>
      Given:<br>
      Force required to break the first wire \\( T \\).<br>
      Diameter of the second wire is twice that of the first wire.<br><br>
      
      The force required to break the second wire is given by:<br>
      \\[
      F_{\\text{second}} = 4T
      \\]
      Thus, the force required is four times the force required for the first wire.
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option B – Incorrect:</strong>
        <p>This option suggests a linear relationship between force and diameter, which is incorrect. The force required is proportional to the area, which depends on the square of the diameter.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect:</strong>
        <p>This option incorrectly suggests a relationship that does not account for the square of the diameter.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect:</strong>
        <p>This option suggests a force smaller than that required for the first wire, which is incorrect as the second wire has a larger cross-sectional area.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> When dealing with the tensile force of a wire, remember that the force required to break the wire is proportional to the cross-sectional area, which depends on the square of the wire's diameter.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '8'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option C correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> For the beam to be in equilibrium:
          <ul>
            <li>The sum of the upward forces must equal the downward force (weight).</li>
            <li>The sum of the clockwise moments must equal the sum of the anticlockwise moments.</li>
          </ul>
          Therefore, we have:
          \\[
          P + Q = W
          \\]
          Taking moments about the left support (where \\(P\\) acts):
          \\[
          Q \\times \\text{distance between supports} = W \\times \\text{distance of W from P}
          \\]
          Since \\(W\\) is closer to \\(P\\) than to \\(Q\\), \\(Q\\) must be larger than \\(P\\) to balance the moments.
          Thus:
          \\[
          Q > P
          \\]
        </li>
      </ul>
    </div>


    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (\\(P > Q\\)):</strong>
        <p>If \\(P\\) were greater than \\(Q\\), the moments would not balance because \\(W\\) is closer to \\(P\\).</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (\\(Q > W\\)):</strong>
        <p>\\(Q\\) alone cannot be greater than \\(W\\) because \\(P + Q = W\\); otherwise, the net upward force would be greater than \\(W\\).</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (\\((P + Q) > W\\)):</strong>
        <p>In equilibrium, \\(P + Q\\) must equal \\(W\\), not be greater than \\(W\\).</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Always apply both the conditions for equilibrium: (1) force balance and (2) moment balance!
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '9'
  },{
    mainAnswer : `
    <div class="explanation">
      <h3>✅ Why is Option B correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> Let's break down each pair of units to identify if they are equivalent or not.</li>
        <li><strong>Option A: Unit 1: Js⁻¹; Unit 2: W</strong></li>
        <ul>
          <li>The unit \\( \\text{Js}^{-1} \\) (joule-seconds inverse) represents power, which is equivalent to the unit \\( \\text{W} \\) (watts). These units are equivalent.</li>
        </ul>
        <li><strong>Option B: Unit 1: kgms⁻²; Unit 2: Ns</strong></li>
        <ul>
          <li>The unit \\( \\text{kgms}^{-2} \\) (kilogram meter per second squared) represents force (newton), while \\( \\text{Ns} \\) (newton-second) represents momentum. These are different physical quantities, so they are not equivalent.</li>
        </ul>
        <li><strong>Option C: Unit 1: Nkg⁻¹; Unit 2: ms⁻²</strong></li>
        <ul>
          <li>The unit \\( \\text{Nkg}^{-1} \\) (newton per kilogram) represents gravitational field strength, which has the same units as \\( \\text{ms}^{-2} \\) (meters per second squared), which represents acceleration. These units are equivalent.</li>
        </ul>
        <li><strong>Option D: Unit 1: Nm; Unit 2: J</strong></li>
        <ul>
          <li>The unit \\( \\text{Nm} \\) (newton meter) is equivalent to the unit \\( \\text{J} \\) (joule), both representing energy or work. These units are equivalent.</li>
        </ul>
      </ul>
      <p>Thus, Option B is the correct answer, as the units \\( \\text{kgms}^{-2} \\) and \\( \\text{Ns} \\) are not equivalent.</p>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect:</strong>
        <p>Both \\( \\text{Js}^{-1} \\) and \\( \\text{W} \\) are equivalent as they represent power.</p>
      </div>
      <div>
        <strong>✅ Option B – Correct:</strong>
        <p>\\( \\text{kgms}^{-2} \\) and \\( \\text{Ns} \\) are not equivalent because one represents force and the other represents momentum.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect:</strong>
        <p>Both \\( \\text{Nkg}^{-1} \\) and \\( \\text{ms}^{-2} \\) are equivalent as they represent acceleration or gravitational field strength.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect:</strong>
        <p>Both \\( \\text{Nm} \\) and \\( \\text{J} \\) are equivalent as they represent energy or work.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Make sure to distinguish between force and momentum. They have different physical meanings and are not interchangeable.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '10'
  }   
],
  WPH11J22 : [ 
  {
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option C correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> Power \\( P \\) is defined as the rate of energy transfer:
          \\[
          P = \\frac{E}{t}
          \\]
          where:
          <ul>
            <li>\\( P = 750\\,\\text{W} \\) (power)</li>
            <li>\\( E = 150\\,\\text{kJ} = 150 \\times 1000\\,\\text{J} \\)</li>
            <li>\\( t \\) is the time in seconds</li>
          </ul>
        </li>
        <li>Rearranging the formula to solve for \\( t \\):
          \\[
          t = \\frac{E}{P}
          \\]
          Substituting the values:
          \\[
          t = \\frac{150 \\times 1000}{750}
          \\]
          This matches Option C.</li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect:</strong>
        <p>This ignores the conversion from kJ to J, leading to a wrong magnitude.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect:</strong>
        <p>This multiplies power and energy incorrectly instead of dividing.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect:</strong>
        <p>This inverts the relationship, dividing power by energy, which is not correct.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Always ensure that energy is in joules (J) when using power in watts (W), since \\(1\\,\\text{W} = 1\\,\\text{J/s}\\).
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '1'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option B correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> When a sphere falls through a viscous liquid, two main forces oppose its motion:
          <ul>
            <li><strong>Upthrust:</strong> This is the buoyant force due to the displaced liquid. It depends only on the volume of the sphere and the density of the liquid, both of which are constant. Thus, the upthrust remains <strong>constant</strong> as the sphere falls.</li>
            <li><strong>Viscous Drag:</strong> This force, according to Stokes' Law, is proportional to the velocity \\( v \\) of the sphere:
              \\[
              F_{\\text{drag}} \\propto v
              \\]
              As the sphere accelerates downward, its velocity increases, causing the viscous drag to <strong>increase</strong>.</li>
          </ul>
        </li>
        <li>Thus, during acceleration:
          <ul>
            <li>Upthrust = constant</li>
            <li>Viscous drag = increasing</li>
          </ul>
          which matches Option B.
        </li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect:</strong>
        <p>Upthrust does not increase because it depends only on the volume and density, which are constant.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect:</strong>
        <p>Viscous drag is not constant; it increases with increasing velocity.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect:</strong>
        <p>Both forces cannot remain constant; viscous drag changes as the speed of the sphere increases.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Remember: In fluids, drag forces usually depend on speed — the faster an object moves, the greater the drag force it experiences!
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '2'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option D correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> Physical quantities are classified as either scalars or vectors:
          <ul>
            <li><strong>Scalar Quantity:</strong> A quantity that has only magnitude and no direction.</li>
            <li><strong>Vector Quantity:</strong> A quantity that has both magnitude and direction.</li>
          </ul>
        </li>
        <li><strong>Work</strong> is a scalar quantity because it depends only on the magnitude of force and displacement and the cosine of the angle \\( \\theta \\) between them:
          \\[
          W = Fd \\cos \\theta
          \\]
          Here, \\( F \\) is the magnitude of force, \\( d \\) is the displacement, and \\( \\cos \\theta \\) adjusts the magnitude, but work itself has no direction.</li>
        <li>Thus, <strong>Work</strong> is correctly classified as a scalar quantity, matching Option D.</li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect:</strong>
        <p><strong>Force</strong> is a vector quantity because it has both magnitude and direction.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect:</strong>
        <p><strong>Momentum</strong> is a vector quantity, represented by \\( \\vec{p} = m \\vec{v} \\), where \\( m \\) is mass and \\( \\vec{v} \\) is velocity.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect:</strong>
        <p><strong>Velocity</strong> is a vector quantity because it describes the rate of change of displacement with a specific direction.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Always check if the quantity requires a direction to be fully described — if yes, it's a vector; if not, it's a scalar!
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '3'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option C correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> The Young modulus \\( E \\) of a material is defined as the ratio of tensile stress \\( \\sigma \\) to tensile strain \\( \\varepsilon \\) within the elastic limit:
          \\[
          E = \\frac{\\sigma}{\\varepsilon}
          \\]
        </li>
        <li>On a graph of tensile stress (\\( \\sigma \\)) against tensile strain (\\( \\varepsilon \\)), the Young modulus corresponds to the gradient of the graph within the linear (elastic) region.</li>
        <li>At the origin, where the material behaves perfectly elastically, the graph is straight, and the gradient of the tangent at the origin gives the Young modulus:
          \\[
          E = \\text{gradient at the origin}
          \\]
        </li>
        <li>Thus, the correct answer is the <strong>gradient of the tangent to the line at the origin</strong>, which matches Option C.</li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect:</strong>
        <p>The area under the graph gives the energy per unit volume (also known as the strain energy density), not the Young modulus.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect:</strong>
        <p>Similarly, the area under the line up to the elastic limit gives the strain energy stored, not the Young modulus.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect:</strong>
        <p>At the breaking point, the material is beyond the elastic limit and possibly plastic deformation has occurred, so \\( \\frac{\\sigma}{\\varepsilon} \\) no longer represents the Young modulus.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Always look at the <strong>initial linear region</strong> when finding Young modulus — it reflects pure elastic behavior according to Hooke's Law!
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '4'
  },{
    mainAnswer : `
    <div class="explanation">
      <h3>✅ Why is Option B correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> The student measured the distance \\( s \\) fallen and the time \\( t \\) taken. Under ideal conditions, the acceleration \\( g \\) is calculated using:
          \\[
          g = \\frac{2s}{t^2}
          \\]
        </li>
        <li>If the student measured a distance greater than the actual distance, then \\( s \\) would be too large. Since \\( g \\) is directly proportional to \\( s \\), the calculated \\( g \\) would also be larger than the true value.</li>
        <li>This explains why the student obtained a value for \\( g \\) of \\( 11.2\\,\\mathrm{m/s^2} \\), which is greater than the accepted value of \\( 9.81\\,\\mathrm{m/s^2} \\).</li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect:</strong>
        <p>If air resistance were significant, it would cause the sphere to fall slower, leading to a smaller value of \\( g \\), not a larger one.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect:</strong>
        <p>Deviation from vertical motion would introduce lateral displacement but would not necessarily cause a higher value of \\( g \\).</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect:</strong>
        <p>If the measured time \\( t \\) was greater than the actual time, \\( t^2 \\) would be larger, making \\( g \\) smaller, not larger.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Accurate measurement of distance is crucial in free-fall experiments, as even small errors directly affect the calculated value of \\( g \\).
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '5'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option B correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> According to Newton's Second Law:
          \\[
          F = ma
          \\]
          Rearranging:
          \\[
          a = \\frac{F}{m}
          \\]
          where:
          <ul>
            <li>\\( F \\) is the resultant force (constant)</li>
            <li>\\( m \\) is the mass of the rocket (steadily decreasing)</li>
          </ul>
        </li>
        <li>Since \\( F \\) is constant and \\( m \\) decreases over time, \\( a \\) must increase.</li>
        <li>A steady decrease in mass causes a steady increase in acceleration, leading to a straight, upward-sloping graph as shown in <strong>Option B</strong>.</li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Constant Acceleration):</strong>
        <p>This would imply that mass remains constant or that the effects of mass loss on acceleration are negligible, which is not the case here.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Decreasing Acceleration):</strong>
        <p>This would imply that either the force decreases or mass increases, neither of which is happening.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Nonlinear Decrease in Acceleration):</strong>
        <p>This curve shows decreasing acceleration over time, which contradicts the given condition of a constant force and decreasing mass.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Always remember: if force is constant and mass decreases, acceleration increases! If the mass decreases uniformly, the acceleration increases linearly.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '6'
  },{
    mainAnswer : `
    <div class="explanation">
      <h3>✅ Why is Option D correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> The elastic strain energy stored in a spring is given by:
          \\[
          E = \\frac{1}{2} F x
          \\]
          where \\( F \\) is the force and \\( x \\) is the extension.
        </li>
        <li><strong>For arrangement P:</strong> 
          <ul>
            <li>Two springs are connected in series.</li>
            <li>In series, the total extension is the sum of the extensions of both springs, and the force in each spring is \\( F \\).</li>
            <li>However, when springs are in series, the effective stiffness halves, so for the same force \\( F \\), the extension doubles.</li>
            <li>Energy stored in each spring is \\( E \\), so total energy is:
              \\[
              2 \\times E = 2E
              \\]
            </li>
          </ul>
        </li>
        <li><strong>For arrangement Q:</strong>
          <ul>
            <li>Two springs are arranged in parallel (top and bottom springs between vertical supports).</li>
            <li>In parallel, the force divides equally, so each spring experiences \\( \\frac{F}{2} \\).</li>
            <li>Elastic energy in each spring becomes:
              \\[
              \\frac{1}{2} \\times \\left( \\frac{F}{2} \\right) \\times x = \\frac{1}{4} E
              \\]
            </li>
            <li>There are two springs, so total energy is:
              \\[
              2 \\times \\frac{1}{4} E = \\frac{1}{2} E
              \\]
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="calculation">
      🧮 <strong>Calculation:</strong><br><br>
      For a single spring stretched by \\( F \\):\\[ E = \\frac{1}{2} F x \\]
      <br>
      <strong>In P (series):</strong> 
      <ul>
        <li>Each spring carries force \\( F \\).</li>
        <li>Each spring stores energy \\( E \\).</li>
        <li>Total energy \\( = 2E \\).</li>
      </ul>
      <strong>In Q (parallel):</strong>
      <ul>
        <li>Each spring carries force \\( \\frac{F}{2} \\).</li>
        <li>Each spring stores \\( \\frac{1}{4} E \\).</li>
        <li>Total energy \\( = \\frac{1}{2} E \\).</li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (P: \\( \\frac{1}{2}E \\), Q: \\(2E\\)):</strong>
        <p>In P, energy doubles, not halves.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (P: \\( \\frac{1}{2}E \\), Q: \\( \\frac{1}{2}E \\)):</strong>
        <p>In P, the energy is actually \\(2E\\), not \\(\\frac{1}{2}E\\).</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (P: \\(2E\\), Q: \\(2E\\)):</strong>
        <p>In Q, energy is only \\(\\frac{1}{2}E\\), not \\(2E\\).</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> In spring combinations, remember: 
      <ul>
        <li>Series: Springs extend more, but the force is the same — more total energy stored.</li>
        <li>Parallel: Force divides, less energy stored in each spring.</li>
      </ul>
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '7'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option D correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> 
          Displacement is given by the area under a velocity-time graph.
        </li>
        <li>In the graph:
          <ul>
            <li>Area \\( R \\) represents the positive displacement (above the time axis).</li>
            <li>Area \\( Q \\) represents the negative displacement (below the time axis).</li>
          </ul>
        </li>
        <li>Thus, the total displacement is:
          \\[
          \\text{Total Displacement} = R - Q
          \\]
          because we add the positive area and subtract the negative area.
        </li>
      </ul>
    </div>

    <div class="calculation">
      🧮 <strong>Calculation:</strong><br><br>
      The displacement is the difference between the areas:
      \\[
      \\text{Total displacement} = R - Q
      \\]
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (P + Q):</strong>
        <p>This simply adds the areas without considering positive and negative contributions correctly.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (P + Q - R):</strong>
        <p>This misinterprets the arrangement of areas and would lead to an incorrect value for displacement.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (R + Q):</strong>
        <p>Adding \\( Q \\) instead of subtracting it wrongly accounts for the direction of motion.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Always subtract areas below the time axis (negative velocity) when calculating displacement from a velocity-time graph.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '8'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option D correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> 
          The work done by a force is given by:
          \\[
          W = F \\times d
          \\]
          where \\( d \\) is the displacement in the direction of the force. Here, the cyclist moves up the slope. The vertical height gained is \\( \\Delta h \\), but the actual displacement \\( d \\) along the slope relates to \\( \\Delta h \\) by:
          \\[
          \\sin(\\theta) = \\frac{\\Delta h}{d}
          \\quad \\Rightarrow \\quad d = \\frac{\\Delta h}{\\sin(\\theta)}
          \\]
          Therefore, the work done is:
          \\[
          W = F \\times \\frac{\\Delta h}{\\sin(\\theta)}
          \\]
          which matches <strong>Option D</strong>.
        </li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Wrong trigonometric function):</strong>
        <p>Multiplying by \\( \\cos(\\theta) \\) instead of dividing by \\( \\sin(\\theta) \\) gives an incorrect relationship between vertical height and displacement.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (Wrong trigonometric function):</strong>
        <p>Dividing by \\( \\cos(\\theta) \\) relates to the horizontal component, not the slope displacement tied to vertical gain.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Incorrect multiplication):</strong>
        <p>Multiplying \\( F \\times \\Delta h \\times \\sin(\\theta) \\) does not correctly represent the relationship between force, vertical height, and work done along the slope.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Remember, on an inclined plane, to relate vertical height to slope displacement use \\( \\sin(\\theta) \\), and adjust the formula for work accordingly!
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '9'
  },{
    mainAnswer: `
        <div class="explanation">
      <h3>✅ Why is Option B correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> The stiffness of the spring, denoted by \\( k \\), is determined by Hooke's Law, which relates force and displacement:
          \\[
          F = k \\times x
          \\]
          where \\( F \\) is the force applied and \\( x \\) is the displacement from the natural length. The change in length of the spring is given by \\( \Delta x = x_{1} - x_{2} \\), where \\( x_1 \\) and \\( x_2 \\) are the spring lengths at the forces 50N and 70N respectively.

          Rearranging Hooke's Law, the spring constant \\( k \\) can be calculated from the change in force and the change in displacement:
          \\[
          k = \\frac{F_2 - F_1}{x_1 - x_2}
          \\]
          where \\( F_1 = 50N \\), \\( F_2 = 70N \\), \\( x_1 = 12.0 \\) cm, and \\( x_2 = 7.1 \\) cm. Therefore, the expression for \\( k \\) becomes:
          \\[
          k = \\frac{70 - 50}{12.0 - 7.1} = \\frac{20}{4.9}
          \\]
          This matches <strong>Option B</strong>.
        </li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Wrong order of forces and lengths):</strong>
        <p>The expression \\( \\frac{70}{12.0} - \\frac{50}{7.1} \\) is not the correct way to calculate the stiffness. The forces should be used with the corresponding displacement differences.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Wrong order of forces and lengths):</strong>
        <p>\\( \\frac{50}{7.1} - \\frac{70}{12.0} \\) does not represent the correct relationship between force and displacement for calculating spring stiffness.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Wrong displacement values):</strong>
        <p>Using \\( \\Delta x = 12.0 - 4.9 \\) is incorrect because the final displacement should correspond to the length at a force of 70N, not an arbitrary value.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> To calculate spring stiffness correctly, always use the change in force and the corresponding change in displacement (from the spring’s natural length) following Hooke's Law.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '10'
  } 
],
  WPH11O22 : [ 
  {
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option B correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> The area under a velocity-time graph represents the displacement of the object. This is because displacement is the integral of velocity over time, which is geometrically represented by the area under the graph. The general formula is:
          \\[
          \\text{Displacement} = \\int v(t) \\, dt
          \\]
        </li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Acceleration is not related to the area under the graph):</strong>
        <p>Acceleration is the rate of change of velocity, which is represented by the slope of a velocity-time graph, not the area under it.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Speed is not related to the area under the graph):</strong>
        <p>Speed is the magnitude of velocity, and it does not represent the area under a velocity-time graph. The area gives displacement, not speed.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Time is not represented by the area under the graph):</strong>
        <p>Time is the independent variable on the x-axis of the velocity-time graph, not something represented by the area under the graph.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> The area under a velocity-time graph always gives displacement. To find the distance, you would need to consider the magnitude of velocity for negative areas as well.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '1'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option C correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> Momentum is a vector quantity because it has both magnitude and direction. It is defined as the product of an object's mass and its velocity, and since velocity is a vector, momentum is also a vector. The general formula is:
          \\[
          \\mathbf{p} = m \\mathbf{v}
          \\]
        </li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Energy is a scalar):</strong>
        <p>Energy is a scalar quantity, meaning it only has magnitude and no direction. It does not require a direction, as seen in quantities like kinetic energy or potential energy.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (Mass is a scalar):</strong>
        <p>Mass is a scalar quantity as it only has magnitude and does not involve direction.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Power is a scalar):</strong>
        <p>Power is a scalar quantity because it only describes the rate of work done or energy transferred and does not involve a direction.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Remember that vector quantities have both magnitude and direction, while scalar quantities only have magnitude.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '2'
  },{
    mainAnswer : `
    <div class="explanation">
      <h3>✅ Why is Option C correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> Stokes' Law applies to small spherical objects moving at low speeds through a fluid with low viscosity. The law describes the drag force experienced by such objects. The formula for the drag force is:
          \\[
          F_d = 6 \\pi \\eta r v
          \\]
          where \\( \\eta \\) is the viscosity of the fluid, \\( r \\) is the radius of the sphere, and \\( v \\) is the velocity of the sphere. For Stokes' Law to apply, the object's size must be small, and the fluid must have low viscosity to ensure the flow remains laminar and the drag force is dominated by viscosity rather than inertial forces.
        </li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Applies to spherical objects but not the conditions for Stokes' Law):</strong>
        <p>Stokes' Law applies to small spherical objects, not all spherical objects regardless of size or speed.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (Low viscosity alone is not sufficient):</strong>
        <p>Stokes' Law requires the object to be small, not just the fluid having low viscosity.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Small size alone is not enough):</strong>
        <p>While the object must be small, low viscosity alone isn't sufficient. The object must also be moving at low speeds for Stokes' Law to apply.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Stokes' Law is most accurate when the Reynolds number is low, indicating laminar flow. This is true for small objects moving slowly through a fluid with low viscosity.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '3'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option A correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> 
          The acceleration-time graph shows a straight line decreasing through zero, implying a linearly changing acceleration.
        </li>
        <li>Since acceleration \\( a \\) is the derivative of velocity \\( v \\):
          \\[
          a = \\frac{dv}{dt}
          \\]
          A linearly changing acceleration leads to a quadratic (parabolic) change in velocity.
        </li>
        <li>Thus, the velocity-time graph will be a smooth curve:
          <ul>
            <li>Velocity increases at a decreasing rate.</li>
            <li>Velocity reaches a maximum when acceleration becomes zero.</li>
            <li>Velocity then decreases as acceleration becomes negative.</li>
          </ul>
        </li>
        <li>This parabolic behavior is correctly represented by <strong>Option A</strong>.</li>
      </ul>
    </div>

    <div class="calculation">
      🧮 <strong>Calculation (Conceptual):</strong><br><br>
      Since acceleration is the slope of the velocity-time graph:
      <ul>
        <li>Initially positive slope \\( \\Rightarrow \\) increasing velocity.</li>
        <li>Zero acceleration \\( \\Rightarrow \\) slope is zero (maximum point of velocity).</li>
        <li>Negative acceleration \\( \\Rightarrow \\) velocity decreases.</li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option B – Incorrect (Step change):</strong>
        <p>Suggests sudden jumps in velocity, which would require infinite acceleration — not shown here.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Exponential-like decay):</strong>
        <p>Suggests nonlinear, non-symmetrical acceleration — not matching the given linear decrease.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Straight lines):</strong>
        <p>Would occur if acceleration were constant for intervals, but here acceleration is continuously changing.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> When acceleration is a straight sloped line, velocity will be a parabola (curved graph).
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '4'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option C correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> The Young modulus (\\(E\\)) is a measure of the stiffness of a material, defined as the ratio of tensile stress to tensile strain. It is given by:
          \\[
          E = \\frac{\\text{Tensile Stress}}{\\text{Tensile Strain}} = \\frac{\\frac{F}{A}}{\\frac{\\Delta L}{L}}
          \\]
          where \\( F \\) is the applied force, \\( A \\) is the cross-sectional area, \\( \\Delta L \\) is the change in length, and \\( L \\) is the original length. A large value of the Young modulus indicates that the material is very stiff, meaning it requires a large tensile stress to produce a small tensile strain. Hence, the ratio of tensile stress to tensile strain is large.
        </li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Force per unit area is related to stress, but not directly to Young modulus):</strong>
        <p>A large force per unit cross-sectional area is related to the tensile stress, but not specifically to the Young modulus. The Young modulus defines the material's response to stress and strain, not just the force required to break it.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (Mass per unit volume relates to density, not Young modulus):</strong>
        <p>The mass per unit volume (density) is unrelated to the Young modulus. The Young modulus measures stiffness, not mass or density.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Material returns to original length only within the elastic limit):</strong>
        <p>The material will return to its original length after removing stress only if the stress is within the elastic limit. A large Young modulus does not guarantee elastic behavior beyond the yield point.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> The Young modulus is a property that describes the ability of a material to resist deformation under stress. A larger Young modulus indicates that the material is stiffer and will deform less under the same amount of stress.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '5'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option B correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> 
          The work done <strong>in stretching and then relaxing</strong> a rubber band is shown as two different paths in a force-extension graph. 
          <br><br>
          - The area under the <strong>loading curve</strong> (extension increasing) represents the energy put into stretching the rubber band (areas <strong>P + Q</strong>).
          <br>
          - The area under the <strong>unloading curve</strong> (extension decreasing) represents the energy recovered as the band contracts (areas <strong>R</strong>).
          <br><br>
          However, the question specifically asks for the <strong>work done in stretching the rubber band up to its maximum extension</strong> — which is the <strong>area under the unloading curve</strong> - <strong>plus</strong> the hysteresis loss (area between the curves).
          <br><br>
          From the diagram:
          \\[
          \\text{Work done} = \\text{Area } Q + R
          \\]
          So, <strong>Option B</strong> is correct.
        </li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Area under loading path only):</strong>
        <p>This is the energy supplied during stretching, but some of it is stored elastically, and some is dissipated as heat (hysteresis). It doesn’t match the question’s phrasing about work "done" in total (including dissipation).</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Only area under unloading):</strong>
        <p>This is just the energy recovered, not the total energy put in.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Only hysteresis loss):</strong>
        <p>This is just the area between the loading and unloading curves, representing energy lost as heat, not total work done.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> In a hysteresis loop, the total work done during a full cycle is the area under the loading curve, and the energy lost is the area enclosed between loading and unloading curves.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '6'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option C correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> 
          When two forces act at a point, the resultant force can be found using the <strong>parallelogram law of vector addition</strong>.
          According to this law:
          <ul>
            <li>The two forces \\( X \\) and \\( Y \\) must be drawn tail-to-tail.</li>
            <li>The parallelogram is completed by drawing lines parallel to each force from the head of the other.</li>
            <li>The resultant force is represented by the diagonal of the parallelogram starting from the common tail point.</li>
          </ul>
          In Option C:
          <ul>
            <li>The forces \\( X \\) and \\( Y \\) are placed correctly tail-to-tail.</li>
            <li>The resultant force is correctly shown as the diagonal between the two forces.</li>
          </ul>
          Therefore, <strong>Option C correctly shows the magnitude and direction of the resultant force</strong>.
        </li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Wrong resultant direction):</strong>
        <p>The resultant force is not drawn correctly as the diagonal starting from the common tail point.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (Incorrect orientation of forces):</strong>
        <p>The forces \\( X \\) and \\( Y \\) are not connected properly to form a true parallelogram, and the resultant direction is misleading.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Wrong resultant direction):</strong>
        <p>Although \\( X \\) and \\( Y \\) are placed properly, the resultant is drawn pointing in the wrong direction (opposite).</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Always remember: in vector addition using the parallelogram law, the resultant is the diagonal that starts from the common point where the two vectors originate.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '7'
  },{
    mainAnswer : `
    <div class="explanation">
      <h3>✅ Why is Option C correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> The elastic energy stored in a spring is given by the formula:
          \\[
          E = \\frac{1}{2} k x^2
          \\]
          where \\( E \\) is the elastic energy, \\( k \\) is the spring constant, and \\( x \\) is the extension. When the force is doubled, the extension also doubles, and since the energy is proportional to the square of the extension, the energy stored in the spring increases by a factor of 4.
          
          For three identical springs in parallel, each spring will store \( 4E \) of energy, and since there are 3 springs, the total energy stored is:
          \\[
          E_{\\text{total}} = 3 \\times 4E = 12E
          \\]
          Hence, the total energy stored in the parallel system is \\( \\frac{4}{3}E \\), which corresponds to Option C.
        </li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Underestimates energy increase):</strong>
        <p>This assumes the energy stored in the parallel system is less than the energy stored in each individual spring, which is incorrect.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (Incorrect factor for energy increase):</strong>
        <p>This option incorrectly assumes a different factor for the energy increase. The correct factor is four times the energy stored in the individual spring.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Misunderstands energy relationship):</strong>
        <p>This option does not correctly account for how energy is distributed and increased when force is applied to a parallel system of springs.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> When dealing with energy stored in a parallel spring system, always remember that the energy increases with the square of the extension, and each spring in the parallel system will store an increased amount of energy.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '8'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option A correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> The kinetic energy (\\( KE \\)) of an object is given by the formula:
          \\[
          KE = \\frac{1}{2} m v^2
          \\]
          For both the proton and the electron, their kinetic energies are equal. So, we equate their kinetic energies:
          \\[
          \\frac{1}{2} m_{\\text{proton}} v_{\\text{proton}}^2 = \\frac{1}{2} m_{\\text{electron}} v_{\\text{electron}}^2
          \\]
          Simplifying:
          \\[
          m_{\\text{proton}} v_{\\text{proton}}^2 = m_{\\text{electron}} v_{\\text{electron}}^2
          \\]
          Since \\( m_{\\text{proton}} = 2000 \\times m_{\\text{electron}} \\), we substitute this into the equation:
          \\[
          2000 m_{\\text{electron}} v_{\\text{proton}}^2 = m_{\\text{electron}} v_{\\text{electron}}^2
          \\]
          Canceling \\( m_{\\text{electron}} \\) from both sides:
          \\[
          2000 v_{\\text{proton}}^2 = v_{\\text{electron}}^2
          \\]
          Taking the square root of both sides:
          \\[
          v_{\\text{electron}} = \\sqrt{2000} \\times v_{\\text{proton}}
          \\]
          Hence, the speed of the electron is \\( \\sqrt{2000} \\times v_{\\text{proton}} \\), which corresponds to <strong>Option A</strong>.
        </li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option B – Incorrect:</strong>
        <p>This option suggests the speed of the electron is \\( \\frac{v_{\\text{proton}}}{\\sqrt{2000}} \\), which does not follow from the correct equation.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect:</strong>
        <p>This option assumes a direct proportionality between the speed of the electron and the proton, but the correct relationship involves a square root.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect:</strong>
        <p>This option assumes the speed of the electron is 2000 times the speed of the proton, which is not the case based on the energy comparison.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Always carefully consider the relationship between kinetic energy, mass, and velocity, and remember that the velocity will depend on the square root of the mass ratio when kinetic energies are equal.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '9'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option C correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> The efficiency of the pump is given as \\( 52\\% \\), meaning that the useful power output is \\( 52\\% \\) of the total power input. The total power input is therefore:
          \\[
          \\text{Total Power Input} = \\frac{25}{0.52} = 48.08 \\, \\text{kW}
          \\]
          The energy dissipated is the difference between the total power input and the useful power output:
          \\[
          \\text{Energy Dissipated} = 48.08 \\, \\text{kW} - 25 \\, \\text{kW} = 23.08 \\, \\text{kW}
          \\]
          Hence, the energy dissipated is approximately \\( 23.08 \\, \\text{kW} \\), which matches Option C: \\( \\frac{25}{0.52} \\).
        </li>
      </ul>
    </div>

    <div class="calculation">
      🧮 <strong>Calculation:</strong><br><br>
      Using \\( \\text{Total Power Input} = \\frac{25}{0.52} = 48.08 \\, \\text{kW} \\):
      \\[
      \\text{Energy Dissipated} = 48.08 \\, \\text{kW} - 25 \\, \\text{kW} = 23.08 \\, \\text{kW}
      \\]
      Therefore, the rate of energy dissipated is approximately \\( 23.08 \\, \\text{kW} \\), matching Option C.
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect:</strong>
        <p>This option calculates \\( 0.48 \\times 25 \\), which represents the dissipated energy as a fraction of the total power output. This isn't the correct approach.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect:</strong>
        <p>This option represents the useful energy output, not the dissipated energy.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect:</strong>
        <p>This option incorrectly suggests dividing the total power by the efficiency, which doesn't correspond to the rate of energy dissipation.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> To calculate the energy dissipated, first find the total power input using the formula \\( \\text{Total Power Input} = \\frac{\\text{Useful Power Output}}{\\text{Efficiency}} \\), then subtract the useful power output from the total power input.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '10'
  } 
],
  WPH11F23 : [ 
  {
    mainAnswer : `
    <div class="explanation">
      <h3>✅ Why is Option C correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> A scalar quantity is a physical quantity that has only magnitude, with no direction. Let's analyze each option:
          <ul>
            <li><strong>Displacement:</strong> Displacement is a vector quantity, as it has both magnitude and direction.</li>
            <li><strong>Moment of a force:</strong> The moment (torque) is also a vector quantity, as it has both magnitude and direction of rotation.</li>
            <li><strong>Power:</strong> Power is a scalar quantity, as it only has magnitude (rate of energy transfer) and no direction. It is defined as the rate of work done and is represented by the equation:
              \\[
              P = \\frac{W}{t}
              \\]
              where:
              <ul>
                <li>\\( P \\) = power,</li>
                <li>\\( W \\) = work done,</li>
                <li>\\( t \\) = time.</li>
              </ul>
            </li>
            <li><strong>Weight:</strong> Weight is a vector quantity, as it has both magnitude (force due to gravity) and direction (towards the center of the Earth).</li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Displacement is a vector):</strong>
        <p>Displacement has both magnitude and direction, so it is not a scalar quantity.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (Moment of force is a vector):</strong>
        <p>The moment of a force has both magnitude and direction, as it is the rotational effect of a force.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Weight is a vector):</strong>
        <p>Weight is a force and has both magnitude and direction, making it a vector quantity.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> To distinguish between scalar and vector quantities, remember that scalars only have magnitude, while vectors have both magnitude and direction.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '1'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option A correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> Gravitational field strength, denoted as \\( g \\), describes the force experienced by a unit mass in a gravitational field. It is defined as the weight per unit mass, which can be mathematically expressed as:
          \\[
          g = \\frac{F}{m}
          \\]
          where:
          <ul>
            <li>\\( F \\) = gravitational force (weight),</li>
            <li>\\( m \\) = mass of the object.</li>
          </ul>
        </li>
        <li>In this case, gravitational field strength represents how much force (weight) a unit mass experiences in a gravitational field, so Option A, "Weight per unit mass," is the correct definition of gravitational field strength.</li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option B – Incorrect:</strong>
        <p>Option B refers to acceleration per unit mass, which is actually the definition of gravitational acceleration, not the gravitational field strength.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect:</strong>
        <p>Option C talks about gravitational potential energy per unit mass, which describes potential energy in a gravitational field, not gravitational field strength.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect:</strong>
        <p>Option D refers to acceleration per unit weight, which is a different concept altogether and does not correctly define gravitational field strength.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Gravitational field strength is a measure of the intensity of a gravitational field and is equivalent to the acceleration due to gravity in that field.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '2'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option B correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> In this scenario, we are dealing with energy transfer when a compressed spring is released. The potential energy stored in the spring is converted into kinetic energy and gravitational potential energy.</li>
        <li>The force <i>F</i> compresses the spring by a distance <i>Δx</i>. The energy stored in the spring as potential energy is given by:
          \\[
          E_{\\text{spring}} = \\frac{1}{2} F \\Delta x
          \\]
        </li>
        <li>When the force is removed, the spring returns to its original length, converting the stored potential energy into kinetic energy and work done against gravity. As the object moves upwards, it gains gravitational potential energy due to its vertical displacement of <i>Δx</i>, given by:
          \\[
          E_{\\text{gravity}} = mg \\Delta x
          \\]
          where:
          <ul>
            <li>\\( m \\) = mass of the object,</li>
            <li>\\( g \\) = acceleration due to gravity,</li>
            <li>\\( \\Delta x \\) = distance the object moves vertically.</li>
          </ul>
        </li>
        <li>The object also gains kinetic energy, which is given by:
          \\[
          E_{\\text{kinetic}} = \\frac{1}{2} m v^2
          \\]
          where:
          <ul>
            <li>\\( v \\) = velocity of the object when the spring returns to its original length.</li>
          </ul>
        </li>
        <li>According to the conservation of energy, the total energy stored in the spring is equal to the sum of the kinetic energy of the object and the gravitational potential energy. Therefore, the correct energy transfer equation is:
          \\[
          \\frac{1}{2} F \\Delta x = \\frac{1}{2} m v^2 + mg \\Delta x
          \\]
        </li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect:</strong>
        <p>This option incorrectly subtracts the gravitational potential energy from the kinetic energy. The gravitational potential energy should be added to the kinetic energy as the object rises against gravity.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect:</strong>
        <p>This option does not properly account for the gravitational potential energy. The spring's potential energy is incorrectly used without the necessary addition of gravitational energy.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect:</strong>
        <p>This option incorrectly uses the total spring energy as equal to the kinetic energy and gravitational energy combined, but it doesn't account for the actual work done by the spring during the return process.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Always consider both kinetic energy and potential energy (gravitational + elastic) when analyzing energy transfer in systems involving springs and gravity.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '3'
  },{
    mainAnswer: `
        <div class="explanation">
      <h3>✅ Why is Option D correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> To measure the acceleration due to gravity accurately, we must minimize the effects of air resistance and any upthrust. This is because both air resistance and upthrust oppose the motion of the ball bearing as it falls, altering the time and the resulting acceleration value.</li>
        <li>When air resistance and upthrust are negligible, the only force acting on the ball bearing is gravity, which allows the object to fall with uniform acceleration <i>g</i>. The acceleration can then be determined using the following kinematic equation:</li>
        <ul>
          <li>\\( s = ut + \\frac{1}{2} a t^2 \\)</li>
          <li>Where \\( s \\) is the distance fallen, \\( u \\) is the initial velocity (0 in this case, since the ball starts from rest), and \\( a \\) is the acceleration due to gravity.</li>
        </ul>
        <li>Therefore, the value of \\( g \\) can be calculated from the measured distance and time, assuming air resistance and upthrust are negligible.</li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect:</strong>
        <p>The laminar flow of air is not a crucial factor in accurately measuring the acceleration due to gravity. What matters more is the reduction of air resistance and upthrust.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect:</strong>
        <p>Terminal velocity is not reached in a typical free-fall experiment used to measure gravity. This option doesn't affect the determination of <i>g</i> in this context.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect:</strong>
        <p>If the ball bearing starts falling before the timer is started, the measured time will not reflect the correct time of fall, leading to an inaccurate calculation of acceleration.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> To ensure accurate measurement of acceleration due to gravity, make sure that the effects of air resistance and upthrust are minimized or negligible.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '4'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option C correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> The formula for calculating the distance traveled under uniform acceleration is given by the equation:
          \\[
          s = \\frac{1}{2} (u + v) t
          \\]
          where:
          <ul>
            <li>\\( u \\) = initial velocity (35 m/s),</li>
            <li>\\( v \\) = final velocity (50 m/s),</li>
            <li>\\( t \\) = time interval (5.0 s).</li>
          </ul>
        </li>
        <li>Substituting the values for \\( u \\), \\( v \\), and \\( t \\), we get:
          \\[
          s = \\frac{1}{2} (35 + 50) \\times 5
          \\]
        </li>
      </ul>
    </div>

    <div class="calculation">
      🧮 <strong>Calculation:</strong><br><br>
      Given:<br>
      Initial velocity \\( u = 35 \\, \\text{m/s} \\)<br>
      Final velocity \\( v = 50 \\, \\text{m/s} \\)<br>
      Time interval \\( t = 5.0 \\, \\text{s} \\)<br><br>

      Using the formula for distance:
      \\[
      s = \\frac{1}{2} (u + v) t
      \\]
      Substituting the values:
      \\[
      s = \\frac{1}{2} \\times (35 + 50) \\times 5 = \\frac{1}{2} \\times 85 \\times 5 = 212.5 \\, \\text{m}
      \\]
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect:</strong>
        <p>This option uses the formula for velocity squared and does not account for the correct method to find the distance under uniform acceleration.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect:</strong>
        <p>This option adds the effects of gravity, but the problem only involves uniform acceleration due to the car's motion, not gravity.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect:</strong>
        <p>This option uses a simple addition of velocity and does not consider the time factor in the correct way.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> For uniform acceleration, the distance traveled can be found by using the average of the initial and final velocities, multiplied by the time taken.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '5'
  },{
    mainAnswer: `
        <div class="explanation">
      <h3>✅ Why is Option B correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> The forces acting on the bubble are:
          <ul>
            <li>\\( P \\) = force of the wind (acting to the left),</li>
            <li>\\( W \\) = weight (acting downward),</li>
            <li>\\( U \\) = upthrust (acting upward).</li>
          </ul>
        </li>
        <li>The net vertical force is \\( W - U \\) because the weight and upthrust act in opposite directions.</li>
        <li>The resultant force \\( F \\) can be found by adding \\( P \\) and \\( W - U \\) using the head-to-tail method of vector addition.</li>
        <li>From vector addition:
          \\[
          \\vec{F} = \\vec{P} + (\\vec{W} - \\vec{U})
          \\]
        </li>
        <li>In Option B:
          <ul>
            <li>\\( P \\) is correctly shown pointing left,</li>
            <li>\\( W - U \\) is correctly shown pointing downward,</li>
            <li>\\( F \\) is correctly shown as the closing side of the triangle (from the start of \\( P \\) to the end of \\( W - U \\)).</li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect:</strong>
        <p>The direction of \\( F \\) is wrong; it does not represent the true resultant vector.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect:</strong>
        <p>\\( P \\) and \\( F \\) are shown but with incorrect vector directions and addition order.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect:</strong>
        <p>Although \\( P \\) and \\( W - U \\) are drawn, \\( F \\) points the wrong way, meaning the resultant is incorrect.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> To add two vectors, draw them head-to-tail. The resultant vector \\( F \\) starts at the tail of the first vector and ends at the head of the last vector.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '6'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option B correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> When the ball is thrown upwards, it moves against gravity and slows down. At the highest point, it stops momentarily and then falls back down, speeding up under gravity.</li>
        <li>Throughout the motion, the ball experiences a constant downward acceleration due to gravity.</li>
        <li>Acceleration due to gravity is:
          \\[
          g = 9.81\\, \\mathrm{m/s^2}
          \\]
          directed downward (negative if upward is taken as positive).
        </li>
        <li>Therefore, the acceleration is constant and negative during the entire motion.</li>
        <li>The correct acceleration-time graph should be a horizontal line below the time-axis (indicating constant negative acceleration).</li>
        <li>In Option B:
          <ul>
            <li>The acceleration is constant (horizontal line).</li>
            <li>The acceleration is negative (line below the time-axis).</li>
          </ul>
          This matches the physical situation perfectly.
        </li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect:</strong>
        <p>The line shows constant positive acceleration, but the ball experiences constant negative acceleration (downward due to gravity).</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect:</strong>
        <p>The line shows acceleration changing with time (slope), but acceleration due to gravity is constant, not changing.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect:</strong>
        <p>This shows acceleration decreasing linearly with time, but again, gravitational acceleration remains constant.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Always remember: if only gravity acts on an object, its acceleration is a constant \\( g \\) downward, no matter if the object is moving upward or downward!
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '7'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option B correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> The work done by the motor to lift the mass is equal to the gravitational potential energy gained by the mass.</li>
        <li><strong>Formula:</strong> The formula for work done is:
          \\[
          W = m \\cdot g \\cdot h
          \\]
          where:
          <ul>
            <li>\\( m \\) is the mass of the object,</li>
            <li>\\( g \\) is the acceleration due to gravity (\\( 9.81 \\, \\text{m/s}^2 \\)),</li>
            <li>\\( h \\) is the height through which the object is lifted.</li>
          </ul>
        </li>
        <li>The power output of the motor is the work done per unit time, and is given by the formula:
          \\[
          P = \\frac{W}{t}
          \\]
          where \\( P \\) is the power and \\( t \\) is the time taken.</li>
        <li>Rearranging this to solve for time, we get:
          \\[
          t = \\frac{W}{P} = \\frac{m \\cdot g \\cdot h}{P}
          \\]</li>
        <li>Substituting the given values:
          \\[
          t = \\frac{50,000 \\cdot 9.81 \\cdot 25}{700,000} = 17.5 \\, \\text{seconds}
          \\]
        </li>
      </ul>
    </div>

    <div class="calculation">
      🧮 <strong>Calculation:</strong><br><br>

      Given:<br>
      Mass \\( m = 50,000 \\, \\text{kg} \\)<br>
      Gravitational acceleration \\( g = 9.81 \\, \\text{m/s}^2 \\)<br>
      Height \\( h = 25 \\, \\text{m} \\)<br>
      Power \\( P = 700,000 \\, \\text{W} \\)<br><br>

      Using the time formula:<br>
      \\[
      t = \\frac{50,000 \\cdot 9.81 \\cdot 25}{700,000} = 17.5 \\, \\text{seconds}
      \\]
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (No Gravitational Force):</strong>
        <p>This calculation ignores the force due to gravity, leading to an incorrect result.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (No Gravitational Factor):</strong>
        <p>This option doesn't include the gravitational force (\\( 9.81 \\)) in the formula.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect Expression (Power in kW):</strong>
        <p>This option uses an incorrect formula that doesn't account for all the factors involved in lifting the mass.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> When dealing with work and power, always ensure that the correct force (gravitational force in this case) is included in the equation for work done.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '8'
  },{
    mainAnswer : `
    <div class="explanation">
      <h3>✅ Why is Option D correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> To determine the Young modulus of a material, we use the formula:
          \\[
          E = \\frac{\\text{Stress}}{\\text{Strain}} = \\frac{F / A}{\\Delta L / L}
          \\]
          where:
          <ul>
            <li>\\( F \\) is the force applied to the wire,</li>
            <li>\\( A \\) is the cross-sectional area of the wire,</li>
            <li>\\( \\Delta L \\) is the extension of the wire, and</li>
            <li>\\( L \\) is the original length of the wire.</li>
          </ul>
        </li>
        <li>To calculate stress, we need the <strong>radius</strong> of the wire to calculate the cross-sectional area \\( A = \\pi r^2 \\). The <strong>original length</strong> \\( L \\) is also required to calculate the strain, which is the extension relative to the original length of the wire.</li>
        <li>Hence, the correct quantities to measure directly are the <strong>radius</strong> and the <strong>original length</strong> of the wire.</li>
      </ul>
    </div>

    <div class="calculation">
      🧮 <strong>Calculation:</strong><br><br>

      Given:<br>
      Force \\( F \\) from the known masses<br>
      Original length \\( L \\) of the wire<br>
      Radius \\( r \\) of the wire to compute the cross-sectional area \\( A = \\pi r^2 \\)<br><br>

      Using the formula for Young's modulus:
      \\[
      E = \\frac{F / A}{\\Delta L / L} = \\frac{\\frac{F}{\\pi r^2}}{\\frac{\\Delta L}{L}}
      \\]
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Diameter and Mass of the Wire):</strong>
        <p>We need the <strong>radius</strong> (not the diameter) to calculate the cross-sectional area. The mass is not required directly in the calculation.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (Diameter and Original Length of the Wire):</strong>
        <p>The diameter can be used, but we need the <strong>radius</strong> to calculate the area, and the mass is not directly necessary for Young's modulus.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Radius and Mass of the Wire):</strong>
        <p>The mass is not directly needed for the calculation of Young's modulus since we already know the force from the applied masses.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> The essential quantities for calculating the Young modulus are the <strong>radius</strong> and the <strong>original length</strong> of the wire.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '9'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option B correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> Newton's third law states that for every action, there is an equal and opposite reaction. Therefore, when two forces form a Newton's third law pair, they act on <strong>different bodies</strong> but are of the same type of force. These forces are equal in magnitude but opposite in direction.</li>
        <li><strong>Formula:</strong> Newton's third law can be expressed as:
          \\[
          F_{1} = - F_{2}
          \\]
          where:
          <ul>
            <li>\\( F_{1} \\) is the force exerted on the first body,</li>
            <li>\\( F_{2} \\) is the force exerted on the second body.</li>
          </ul>
        </li>
        <li>For a Newton's third law pair, the forces are always of the same magnitude but act in opposite directions on different bodies.</li>
        <li>Hence, Option B is correct because it describes forces that are of the same type and act on different bodies.</li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Same Body):</strong>
        <p>Newton's third law forces do not act on the same body. They always act on different bodies.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Different Magnitudes):</strong>
        <p>For Newton's third law pair forces, the magnitudes are always the same, but they act in opposite directions.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Different Magnitudes):</strong>
        <p>For Newton's third law pair forces, the forces are always of the same type and equal in magnitude, but they act on different bodies.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Remember that for Newton's third law pairs, the forces are equal in magnitude, opposite in direction, and act on different bodies.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '10'
  }  
],
  WPH11J23 : [
  {
    mainAnswer : `  
  <div class="explanation">
    <h3>✅ Why is "Weight" correct?</h3>
    <ul>
      <li><strong>Definition:</strong> Weight is the force of gravity on an object.</li>
      <li><strong>Formula:</strong> <code>W = m × g</code> (mass × gravity)</li>
      <li><strong>Direction:</strong> Acts downward → has direction → <span class="vector">Vector</span></li>
    </ul>
  </div>

  <div class="other-options">
    <div>
      <strong>❌ Option A – Efficiency:</strong>
      <p>Just a ratio (no direction). ➜ <span class="color-red">Scalar</span></p>
    </div>
    <div>
      <strong>❌ Option B – Kinetic Energy:</strong>
      <p>Only measures motion energy, no direction. ➜ <span class="color-red">Scalar</span></p>
    </div>
    <div>
      <strong>❌ Option C – Power:</strong>
      <p>Rate of doing work (watts), directionless. ➜ <span class="color-red">Scalar</span></p>
    </div>
  </div>

  <div class="tip-box">
    💡 <strong>Tip:</strong> Ask yourself – Does it have a direction? If yes ➜ it's likely a <span class="color-green">vector!</span>
  </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '1'
  },{
    mainAnswer : `
  <div class="explanation">
    <h3>✅ Why is Option B correct?</h3>
    <ul>
      <li><strong>Definition:</strong> Work done is the product of the force applied in the direction of motion and the displacement.</li>
      <li><strong>Formula:</strong> <code>W = F × d × cosθ</code> (force × distance × cosine of the angle between force and displacement)</li>
      <li><strong>Direction:</strong> The force is applied at an angle to the direction of motion, so only the component of the force in the direction of displacement does work.</li>
    </ul>

    <div class="calculation">
      🧮 Calculation:<br>
      <br>
      Given:<br>
      \\( F = 225\\ \\text{N} \\)<br>
      \\( d = 450\\ \\text{m} \\)<br>
      \\( \\theta = 40^\\circ \\)<br><br>

      Using the formula:<br>
      \\( W = F \\times d \\times \\cos(\\theta) \\)<br><br>

      \\( W = 225 \\times 450 \\times 0.766 \\)<br>
      \\( W = 76,822.5\\ \\text{J} \\)<br>
    </div>

  </div>

  <div class="other-options">
    <div>
      <strong>❌ Option A – Missing Angle Component:</strong>
      <p>This expression ignores the angle between the force and displacement.</p>
    </div>
    <div>
      <strong>❌ Option C – Incorrect Trigonometric Function:</strong>
      <p>Using sine instead of cosine gives the wrong component of the force.</p>
    </div>
    <div>
      <strong>❌ Option D – Incorrect Trigonometric Function:</strong>
      <p>Using tan instead of cosine gives the wrong component of the force.</p>
    </div>
  </div>

  <div class="tip-box">
  💡 <strong>Tip:</strong> Work done only considers the component of force that acts in the direction of motion. Always include the cosine of the angle between the force and displacement! ➜ It's a <span class="color-green">vector!</span>
  </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '2'
  },{
    mainAnswer : `
    <div class="explanation">
      <h3>✅ Why is Option C correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> The extension of a wire depends on both its length and diameter. According to Hooke's Law, the extension is directly proportional to the length of the wire and inversely proportional to the cross-sectional area (which depends on the diameter).</li>
        <li><strong>Formula:</strong> \\( \\text{Extension} = \\frac{F \\cdot L}{A \\cdot Y} \\), where:
          <ul>
            <li>\\( F \\) is the applied force,</li>
            <li>\\( L \\) is the length of the wire,</li>
            <li>\\( A = \\pi r^2 \\) is the cross-sectional area,</li>
            <li>\\( Y \\) is Young’s Modulus (a constant).</li>
          </ul>
        </li>
        <li><strong>Proportionality:</strong> Option C has the longest length (\\( 2x \\)) and the smallest diameter (\\( D \\)). This combination increases the numerator and keeps the denominator small, producing the greatest extension.</li>
      </ul>
    </div>

    <div class="calculation">
      🧮 <strong>Calculation:</strong><br><br>

      Given:<br>
      \\( F \\) = Force<br>
      \\( L \\) = Length<br>
      \\( A \\) = Area (depends on diameter)<br>
      \\( Y \\) = Young’s Modulus<br><br>

      Formula:<br>
      \\[ \\Delta L = \\frac{F \\cdot L}{A \\cdot Y} \\]<br><br>

      For Option C:<br>
      Length = \\( 2x \\), Diameter = \\( D \\)<br>
      So, \\( A = \\frac{\\pi D^2}{4} \\)<br><br>

      Substituting:<br>
      \\[
      \\Delta L = \\frac{F \\cdot 2x}{\\left( \\frac{\\pi D^2}{4} \\right) \\cdot Y} = \\frac{8F x}{\\pi D^2 Y}
      \\]<br><br>

      This value is larger than in all other options.
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Too Short Length:</strong>
        <p>Length is only \\( x \\), which produces less extension compared to Option C’s \\( 2x \\).</p>
      </div>
      <div>
        <strong>❌ Option B – Large Diameter:</strong>
        <p>Diameter is \\( 2D \\), so area becomes \\( \\pi (2D)^2 / 4 = \\pi D^2 \\), which reduces extension significantly.</p>
      </div>
      <div>
        <strong>❌ Option D – Too Large Diameter:</strong>
        <p>Length is \\( 2x \\), but the diameter is also \\( 2D \\), increasing area and reducing extension compared to Option C.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Maximum extension occurs with a longer length and a smaller diameter. A thinner, longer wire stretches the most.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '3'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option B correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> The work done to stretch a spring is equal to the area under the force-extension graph, which is a triangle in this case.</li>
        <li><strong>Formula:</strong> The formula for work done on a spring is:
          \\[
          W = \\frac{1}{2} \\cdot F \\cdot x
          \\]
          where:
          <ul>
            <li>\\( F \\) is the force at the final extension,</li>
            <li>\\( x \\) is the extension in meters.</li>
          </ul>
        </li>
        <li>From the graph, the force at \\( x = 0.30 \\text{ m} \\) is \\( 2.5 \\text{ N} \\).</li>
        <li>Substituting values:
          \\[
          W = \\frac{1}{2} \\cdot 2.5 \\cdot 0.30 = 0.375 \\text{ J}
          \\]
        </li>
        <li>So the correct expression is: \\( 0.5 \\times 0.30 \\times 2.5 \\)</li>
      </ul>
    </div>

    <div class="calculation">
      🧮 <strong>Calculation:</strong><br><br>

      Given:<br>
      Final force \\( F = 2.5 \\text{ N} \\)<br>
      Extension \\( x = 0.30 \\text{ m} \\)<br><br>

      Using the work done formula:<br>
      \\[
      W = \\frac{1}{2} \\cdot F \\cdot x = \\frac{1}{2} \\cdot 2.5 \\cdot 0.30 = 0.375 \\text{ J}
      \\]
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Missing Half Factor):</strong>
        <p>This gives \\( 2.5 \\cdot 0.30 = 0.75 \\text{ J} \\), which ignores the \\( \\frac{1}{2} \\) factor for triangle area.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Spring Constant):</strong>
        <p>This seems to try calculating the spring constant, not the work done.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect Expression:</strong>
        <p>This divides extension by force, which doesn't relate to work done.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> The area under a force-extension graph represents the work done. For a straight line, use the area of a triangle: \\( \\frac{1}{2} \\cdot \\text{base} \\cdot \\text{height} \\).
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '4'
  },{
    mainAnswer : `
  <div class="explanation">
    <h3>✅ Why is Option B correct?</h3>
    <ul>
      <li><strong>Explanation:</strong> The equation for free fall is:
        \\[
        s = \\frac{1}{2} g t^2
        \\]
        If we rearrange:
        \\[
        2s = g t^2
        \\]
        Plotting \\( 2s \\) on the y-axis and \\( t^2 \\) on the x-axis gives a straight line whose gradient is \\( g \\).</li>
      <li><strong>Formula:</strong> 
        \\[
        \\text{Gradient} = g
        \\]
        because \\( 2s = g t^2 \\).</li>
      <li>Therefore, Option B gives the correct graph to determine \\( g \\).</li>
    </ul>
  </div>

  <div class="other-options">
    <div>
      <strong>❌ Option A – Incorrect:</strong>
      <p>Plotting \\( s \\) against \\( 2t^2 \\) does not correctly match the proportionality. Doubling \\( t^2 \\) changes the required gradient and does not yield \\( g \\).</p>
    </div>
    <div>
      <strong>❌ Option C – Incorrect:</strong>
      <p>Plotting \\( s \\) against \\( 2t \\) is incorrect because \\( s \\) is proportional to \\( t^2 \\), not \\( t \\).</p>
    </div>
    <div>
      <strong>❌ Option D – Incorrect:</strong>
      <p>Plotting \\( 2s \\) against \\( t \\) is also wrong since \\( t \\) needs to be squared to maintain the correct relationship with \\( s \\).</p>
    </div>
  </div>

  <div class="tip-box">
    💡 <strong>Tip:</strong> When working with motion under constant acceleration, check if the variable depends linearly or quadratically on time to decide how to plot graphs properly!
  </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '5'
  },{
    mainAnswer : `
      <div class="explanation">
    <h3>✅ Why is Option B correct?</h3>
    <ul>
      <li><strong>Explanation:</strong> The equation for free fall is:
        \\[
        s = \\frac{1}{2} g t^2
        \\]
        If we rearrange:
        \\[
        2s = g t^2
        \\]
        Plotting \\( 2s \\) on the y-axis and \\( t^2 \\) on the x-axis gives a straight line whose gradient is \\( g \\).</li>
      <li><strong>Formula:</strong> 
        \\[
        \\text{Gradient} = g
        \\]
        because \\( 2s = g t^2 \\).</li>
      <li>Therefore, Option B gives the correct graph to determine \\( g \\).</li>
    </ul>
  </div>

  <div class="other-options">
    <div>
      <strong>❌ Option A – Incorrect:</strong>
      <p>Plotting \\( s \\) against \\( 2t^2 \\) does not correctly match the proportionality. Doubling \\( t^2 \\) changes the required gradient and does not yield \\( g \\).</p>
    </div>
    <div>
      <strong>❌ Option C – Incorrect:</strong>
      <p>Plotting \\( s \\) against \\( 2t \\) is incorrect because \\( s \\) is proportional to \\( t^2 \\), not \\( t \\).</p>
    </div>
    <div>
      <strong>❌ Option D – Incorrect:</strong>
      <p>Plotting \\( 2s \\) against \\( t \\) is also wrong since \\( t \\) needs to be squared to maintain the correct relationship with \\( s \\).</p>
    </div>
  </div>

  <div class="tip-box">
    💡 <strong>Tip:</strong> When working with motion under constant acceleration, check if the variable depends linearly or quadratically on time to decide how to plot graphs properly!
  </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '6'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option D correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> The equation connecting velocities, acceleration, and distance for uniform acceleration is:
          \\[
          v^2 = u^2 + 2as
          \\]
          where:
          <ul>
            <li>\\( v \\) = final velocity,</li>
            <li>\\( u \\) = initial velocity,</li>
            <li>\\( a \\) = acceleration,</li>
            <li>\\( s \\) = distance traveled.</li>
          </ul>
        </li>
        <li>Rearranging for acceleration \\( a \\):
          \\[
          a = \\frac{v^2 - u^2}{2s}
          \\]
        </li>
        <li>Substituting the given values:
          <ul>
            <li>\\( u = 3\\,\\mathrm{ms^{-1}} \\)</li>
            <li>\\( v = 5\\,\\mathrm{ms^{-1}} \\)</li>
            <li>\\( s = 15\\,\\mathrm{m} \\)</li>
          </ul>
        </li>
        <li>Thus, the correct expression is:
          \\[
          a = \\frac{5^2 - 3^2}{2 \\times 15}
          \\]
        </li>
      </ul>
    </div>

    <div class="calculation">
      🧮 <strong>Calculation:</strong><br><br>

      Given:<br>
      Initial velocity \\( u = 3\\,\\mathrm{ms^{-1}} \\)<br>
      Final velocity \\( v = 5\\,\\mathrm{ms^{-1}} \\)<br>
      Distance \\( s = 15\\,\\mathrm{m} \\)<br><br>

      Using the rearranged equation:<br>
      \\[
      a = \\frac{v^2 - u^2}{2s}
      \\]
      Substituting the values:<br>
      \\[
      a = \\frac{5^2 - 3^2}{2 \\times 15} = \\frac{25 - 9}{30} = \\frac{16}{30} \\approx 0.533\\,\\mathrm{ms^{-2}}
      \\]
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Wrong Formula):</strong>
        <p>This uses \\( a = \\frac{v - u}{s} \\), which is not valid when acceleration is uniform and not constant in time relation.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (Wrong Formula):</strong>
        <p>This incorrectly divides by \\( 2s \\) but still applies \\( v - u \\) instead of \\( v^2 - u^2 \\).</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Missing 2 Factor):</strong>
        <p>This option uses \\( \\frac{v^2 - u^2}{s} \\), missing the factor of 2 in the denominator required by the formula.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> When dealing with equations of motion where time isn't involved, use the relation \\( v^2 = u^2 + 2as \\) to solve for acceleration.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '7'
  },{
    mainAnswer  : `
        <div class="explanation">
      <h3>✅ Why is Option C correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> The equation connecting velocities, acceleration, and distance for uniform acceleration is:
          \\[
          v^2 = u^2 + 2as
          \\]
          where:
          <ul>
            <li>\\( v \\) = final velocity,</li>
            <li>\\( u \\) = initial velocity (which is 0 since the object starts from rest),</li>
            <li>\\( a \\) = acceleration,</li>
            <li>\\( s \\) = distance traveled.</li>
          </ul>
        </li>
        <li>Since the object starts from rest, we have \\( u = 0 \\). The equation simplifies to:
          \\[
          v^2 = 2as
          \\]
        </li>
        <li>Rearranging for acceleration \\( a \\):
          \\[
          a = \\frac{v^2}{2s}
          \\]
        </li>
        <li>Now, since the object is on a slope inclined at an angle \\( \\theta = 23^\\circ \\), the component of gravitational acceleration acting along the slope is \\( g \\sin\\theta \\). So the acceleration is:
          \\[
          a = g \\sin(23^\\circ)
          \\]
        </li>
        <li>Finally, we can substitute the given values:
          <ul>
            <li>\\( g = 9.81 \\ \\mathrm{m/s^2} \\)</li>
            <li>\\( s = 20 \\ \\mathrm{m} \\)</li>
            <li>\\( \\theta = 23^\\circ \\)</li>
          </ul>
        </li>
        <li>Thus, the final velocity \\( v \\) is:
          \\[
          v = \\sqrt{2gs \\sin(23^\\circ)}
          \\]
        </li>
      </ul>
    </div>

    <div class="calculation">
      🧮 <strong>Calculation:</strong><br><br>
      
      Given:<br>
      Gravitational acceleration \\( g = 9.81\\,\\mathrm{m/s^2} \\)<br>
      Distance \\( s = 20\\,\\mathrm{m} \\)<br>
      Angle \\( \\theta = 23^\\circ \\)<br><br>

      Using the formula for velocity:
      \\[
      v = \\sqrt{2gs \\sin(23^\\circ)}
      \\]
      Substituting the values:
      \\[
      v = \\sqrt{2 \\times 9.81 \\times 20 \\times \\sin(23^\\circ)} = \\sqrt{2 \\times 9.81 \\times 20 \\times 0.3907} \\approx \\sqrt{153.48} \\approx 12.4\\,\\mathrm{m/s}
      \\]
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Wrong Formula):</strong>
        <p>This option uses \\( \\cos(23^\\circ) \\) instead of \\( \\sin(23^\\circ) \\), which is incorrect for the acceleration component down the slope.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (Wrong Formula):</strong>
        <p>This option incorrectly uses \\( \\frac{1}{2} \\) instead of \\( 2 \\) in the formula for velocity, and also uses \\( \\cos(23^\\circ) \\), which is wrong.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Wrong Formula):</strong>
        <p>This option also uses \\( \\frac{1}{2} \\) and \\( \\cos(23^\\circ) \\), both of which lead to an incorrect expression for the final velocity.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> When an object moves down a slope under gravity, the acceleration along the slope is given by \\( g \\sin(\\theta) \\), where \\( g \\) is the gravitational acceleration and \\( \\theta \\) is the slope angle.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '8'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option B correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> When a ball bearing falls at terminal velocity, the forces acting on it are balanced. The viscous drag \\( F_d \\) balances the effective weight:
          \\[
          F_d = \\text{Weight} - \\text{Buoyant Force}
          \\]
          and at terminal velocity, \\( F_d \\) stays <strong>constant</strong> because the effective weight does not change with temperature.</li>
        <li>Stokes' law relates viscous drag \\( F_d \\) to viscosity \\( \\eta \\) and velocity \\( v \\):
          \\[
          F_d = 6 \\pi \\eta r v
          \\]
          where:
          <ul>
            <li>\\( \\eta \\) = viscosity of the liquid,</li>
            <li>\\( r \\) = radius of the ball bearing,</li>
            <li>\\( v \\) = terminal velocity.</li>
          </ul>
        </li>
        <li>As the temperature of the liquid increases:
          <ul>
            <li>The viscosity \\( \\eta \\) <strong>decreases</strong>.</li>
            <li>To keep \\( F_d \\) constant (since effective weight is constant), the terminal velocity \\( v \\) must <strong>increase</strong>.</li>
          </ul>
        </li>
        <li>Thus:
          <ul>
            <li>Viscous drag on the ball bearing remains <strong>constant</strong>,</li>
            <li>Viscosity of the liquid <strong>decreases</strong>.</li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect:</strong>
        <p>This incorrectly states that viscosity increases. In liquids, viscosity decreases with rising temperature.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect:</strong>
        <p>Viscous drag does not decrease; it remains constant at terminal velocity. Also, viscosity does not increase.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect:</strong>
        <p>Although viscosity decreases correctly here, viscous drag remains constant, not decreasing.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> At terminal velocity, drag force equals the effective weight. Increasing temperature decreases viscosity, causing a higher terminal velocity to maintain the same drag force.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '9'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option D correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> When two identical springs are arranged <strong>in series</strong>, the effective spring constant \\( k_{\\text{series}} \\) is:
          \\[
          \\frac{1}{k_{\\text{series}}} = \\frac{1}{k} + \\frac{1}{k} = \\frac{2}{k}
          \\]
          Simplifying gives:
          \\[
          k_{\\text{series}} = \\frac{k}{2}
          \\]
        </li>
        <li>From Hooke's Law, the force \\( F \\) relates to the extension \\( x \\) and spring constant \\( k \\) by:
          \\[
          F = k_{\\text{series}} \\times x
          \\]
          Substituting \\( k_{\\text{series}} = \\frac{k}{2} \\), we have:
          \\[
          F = \\frac{k}{2} \\times x
          \\]
        </li>
        <li>Rearranging for \\( k \\):
          \\[
          k = \\frac{2F}{x}
          \\]
        </li>
        <li>Substituting the given values:
          <ul>
            <li>Force \\( F = 45.0 \\ \\mathrm{N} \\)</li>
            <li>Extension \\( x = 15 \\ \\mathrm{mm} \\)</li>
          </ul>
        </li>
        <li>Thus, the stiffness of each spring is:
          \\[
          k = \\frac{2 \\times 45}{15}
          \\]
          which matches Option D: \\( \\frac{2 \\times 45}{15} \\).
        </li>
      </ul>
    </div>

    <div class="calculation">
      🧮 <strong>Calculation:</strong><br><br>

      Given:<br>
      Force \\( F = 45.0\\,\\mathrm{N} \\)<br>
      Extension \\( x = 15\\,\\mathrm{mm} \\)<br><br>

      Using the formula:<br>
      \\[
      k = \\frac{2F}{x}
      \\]
      Substituting the values:<br>
      \\[
      k = \\frac{2 \\times 45}{15} = \\frac{90}{15} = 6\\,\\mathrm{N/mm}
      \\]
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Wrong Rearrangement):</strong>
        <p>This option incorrectly places \\( 15 \\) in the numerator, while it should be in the denominator.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (Half the Correct Formula):</strong>
        <p>This option only uses half the force instead of accounting for both springs properly.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Incorrect Formula):</strong>
        <p>This option wrongly doubles the extension instead of doubling the force.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> For springs in series, the overall spring constant becomes smaller, and you must double the force when solving for an individual spring's stiffness.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '10'
  }
],
  WPH11O23 : [ 
  {
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option A correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> 
          - A <strong>scalar</strong> quantity has only magnitude and no direction.<br>
          - A <strong>vector</strong> quantity has both magnitude and direction.<br><br>

          <strong>Checking Option A:</strong><br>
          - Energy is a scalar quantity because it only has magnitude and no direction.<br>
          - Momentum is a vector quantity because it depends on both the mass and velocity of an object, and velocity has direction.<br><br>

          Mathematically, momentum \\( \\vec{p} \\) is defined as:
          \\[
          \\vec{p} = m \\vec{v}
          \\]
          where:<br>
          - \\( m \\) = mass (scalar)<br>
          - \\( \\vec{v} \\) = velocity (vector)<br><br>
          Since it involves a vector (velocity), momentum is also a vector.<br><br>
          ✅ Thus, Option A correctly classifies Energy as a scalar and Momentum as a vector.
        </li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option B – Incorrect (Displacement is a vector, not a scalar):</strong>
        <p>Displacement has both magnitude and direction, so it is a vector, not a scalar.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Mass is a scalar, not a vector):</strong>
        <p>Mass only has magnitude and no direction, so it is a scalar, not a vector.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Velocity is a vector, not a scalar):</strong>
        <p>Velocity has both magnitude and direction, making it a vector, not a scalar.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Always remember: if a quantity needs direction to be fully described, it is a vector; otherwise, it is a scalar.
    </div>
    `,
    videoLink : 'https://youtu.be/x6EiqIlS8mc',
    practiceLink: '#',
    answerID : '1'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option A correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> 
          Momentum \\( \\vec{p} \\) is defined as the product of mass \\( m \\) and velocity \\( \\vec{v} \\):
          \\[
          \\vec{p} = m \\vec{v}
          \\]
          where:
          <ul>
            <li>\\( m \\) is measured in kilograms (\\( \\mathrm{kg} \\))</li>
            <li>\\( \\vec{v} \\) is measured in meters per second (\\( \\mathrm{m\\,s^{-1}} \\))</li>
          </ul>
          Thus, the SI unit of momentum is:
          \\[
          \\mathrm{kg\\,m\\,s^{-1}}
          \\]
          which matches Option A.
        </li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option B – Incorrect (Unit of Force per Distance):</strong>
        <p>\\( \\mathrm{J\\,m^{-1}} \\) represents force (since \\( \\mathrm{1\\,J = 1\\,N\\,m} \\)), not momentum.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Unit of Acceleration):</strong>
        <p>\\( \\mathrm{m\\,s^{-2}} \\) is the unit for acceleration, not momentum.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Incorrect Derived Unit):</strong>
        <p>\\( \\mathrm{N\\,s^{-1}} \\) simplifies to \\( \\mathrm{kg\\,m\\,s^{-3}} \\), which does not represent momentum.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Remember, momentum depends directly on mass and velocity, so its unit must combine \\( \\mathrm{kg} \\) and \\( \\mathrm{m\\,s^{-1}} \\).
    </div>
    `,
    videoLink : 'https://youtu.be/7aIy5lmnDrA',
    practiceLink: '#',
    answerID : '2'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option B correct?</h3>
      <ul>
        <li><strong>Explanation:</strong>
          The <strong>elastic limit</strong> of a material is the maximum stress that a material can withstand and still return to its original shape once the stress is removed. Beyond this point, the material undergoes permanent deformation.<br><br>
          Stress \\( \\sigma \\) is defined as:
          \\[
          \\sigma = \\frac{F}{A}
          \\]
          where:
          <ul>
            <li>\\( F \\) is the applied force (\\( \\mathrm{N} \\))</li>
            <li>\\( A \\) is the cross-sectional area (\\( \\mathrm{m^2} \\))</li>
          </ul>
          When the stress exceeds the elastic limit, the material will no longer return to its original length or shape after the force is removed — it becomes permanently deformed. Therefore, Option B correctly describes the elastic limit.
        </li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Beyond Hooke's Law Only):</strong>
        <p>While Hooke's Law breaks down at the elastic limit, this description alone does not fully capture the idea of permanent deformation, which defines the elastic limit.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Sudden Extension Happens at Yield Point):</strong>
        <p>A sudden increase in extension typically occurs at the <strong>yield point</strong>, not necessarily at the elastic limit.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Breaking Point):</strong>
        <p>The material breaking corresponds to the <strong>ultimate tensile strength</strong> or breaking point, not the elastic limit.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Always remember: the elastic limit marks the transition from reversible to irreversible deformation!
    </div>
    `,
    videoLink : 'https://youtu.be/75t8reoXhfE',
    practiceLink: '#',
    answerID : '3'
  },{
    mainAnswer : `
    <div class="explanation">
      <h3>✅ Why is Option C correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> A ball falling through air starts from rest, so its initial velocity \\( u = 0 \\).</li>
        <li>As the ball falls, it accelerates downward under gravity, but because of <strong>air resistance</strong>, the acceleration <strong>gradually decreases</strong> over time.</li>
        <li>The displacement \\( s \\) over time \\( t \\) initially increases quickly, but as air resistance grows, the rate of increase of displacement <strong>slows down</strong>.</li>
        <li>Thus, the displacement-time graph will:
          <ul>
            <li>Start steep (rapid displacement initially),</li>
            <li>Then curve and become flatter over time (displacement increases more slowly).</li>
          </ul>
        </li>
        <li>Mathematically, initially we have:
          \\[
          s = \\frac{1}{2}gt^2
          \\]
          but due to air resistance, the effective acceleration reduces with time, causing the curve to bend and flatten.
        </li>
        <li><strong>Option C</strong> exactly shows this behavior: the curve is steep initially and then flattens out, matching a falling object with increasing air resistance.</li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Constant Displacement):</strong>
        <p>This shows no motion at all (horizontal line), meaning zero velocity and zero acceleration — not the case for a falling ball.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (Constant Velocity):</strong>
        <p>This shows constant velocity (straight line), while a ball falling through air has changing velocity due to gravity and air resistance.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Constant Acceleration without Air Resistance):</strong>
        <p>This shows a graph for constant acceleration (e.g., in a vacuum with no air resistance). In real air, resistance affects the motion, so D is not suitable.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Always check if the question says "through air" — air resistance changes the shape of displacement-time and velocity-time graphs significantly!
    </div>
    `,
    videoLink : 'https://youtu.be/e29zK23nuec',
    practiceLink: '#',
    answerID : '4'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option C correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> Gravitational potential energy \\( (U) \\) increases when work is done <strong>against the gravitational force</strong>. The increase in potential energy is given by:
          \\[
          \\Delta U = mgh
          \\]
          where:
          <ul>
            <li>\\( m \\) is the mass of the helicopter,</li>
            <li>\\( g \\) is the acceleration due to gravity,</li>
            <li>\\( h \\) is the height gained.</li>
          </ul>
        </li>
        <li>To move upwards, the helicopter must exert a force greater than or equal to its weight (\\( mg \\)) to overcome gravity. The work done <strong>against gravity</strong> directly leads to an increase in gravitational potential energy.</li>
        <li>Thus, the correct description is: <strong>the work done by the helicopter against the force of gravity</strong>.</li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Work by Gravity):</strong>
        <p>The force of gravity does negative work when an object moves upward, not positive work to increase potential energy.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (Total Work Done):</strong>
        <p>The total work includes work done to increase kinetic energy as well, not just potential energy.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Work to Increase Speed):</strong>
        <p>Increasing speed refers to kinetic energy, not gravitational potential energy.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Always remember: Gravitational potential energy increases when you perform work <em>against</em> gravity, not because of gravity or total energy changes.
    </div>
    `,
    videoLink : 'https://youtu.be/7TNoF3OxmSc',
    practiceLink: '#',
    answerID : '5'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option A correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> The kinetic energy \\( E_k \\) of an object moving with velocity \\( v \\) is given by:
          \\[
          E_k = \\frac{1}{2}mv^2
          \\]
        </li>
        <li>If the kinetic energy is doubled, the new kinetic energy \\( E'_k \\) becomes:
          \\[
          E'_k = 2 \\times \\frac{1}{2}mv^2 = mv^2
          \\]
        </li>
        <li>The new kinetic energy \\( E'_k \\) can also be expressed in terms of the new velocity \\( v' \\):
          \\[
          E'_k = \\frac{1}{2}m(v')^2
          \\]
        </li>
        <li>Setting the two expressions for \\( E'_k \\) equal:
          \\[
          \\frac{1}{2}m(v')^2 = mv^2
          \\]
          Multiplying both sides by 2:
          \\[
          m(v')^2 = 2mv^2
          \\]
          Dividing both sides by \\( m \\):
          \\[
          (v')^2 = 2v^2
          \\]
          Taking the square root of both sides:
          \\[
          v' = \\sqrt{2}v
          \\]
        </li>
        <li>Thus, the new velocity is \\( \\sqrt{2}v \\), which matches <strong>Option A</strong>.</li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option B – Incorrect (Simply doubling the velocity):</strong>
        <p>Doubling the velocity would increase the kinetic energy by a factor of four, not two.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Incorrect multiple):</strong>
        <p>\\( 2\\sqrt{2}v \\) would lead to a much larger increase in kinetic energy than just doubling it.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Incorrect factor):</strong>
        <p>\\( 4v \\) would result in a kinetic energy 16 times greater, not just doubled.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Remember, kinetic energy is proportional to the square of velocity. If you double the kinetic energy, the velocity only increases by a factor of \\( \\sqrt{2} \\), not 2.
    </div>
    `,
    videoLink : 'https://youtu.be/y_bOyUVK4Yw',
    practiceLink: '#',
    answerID : '6'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option A correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> The efficiency \\( (\\eta) \\) of a power station is the ratio of useful electrical output power to the total input power:
          \\[
          \\eta = \\frac{P_{\\text{out}}}{P_{\\text{in}}}
          \\]
        </li>
        <li>The station’s electrical output is \\( P_{\\text{out}} = 2.1\\,\\mathrm{GW} \\), and it transfers thermal energy to the surroundings at a rate \\( P_{\\text{th}} = 3.4\\,\\mathrm{GW} \\). Thus the total input power is:
          \\[
          P_{\\text{in}} = P_{\\text{out}} + P_{\\text{th}} = 2.1 + 3.4\\,\\mathrm{GW}
          \\]
        </li>
        <li>Substituting into the efficiency formula gives:
          \\[
          \\eta = \\frac{2.1}{2.1 + 3.4}
          \\]
        </li>
        <li>Therefore, the expression for the efficiency matches <strong>Option A</strong>.</li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option B – Incorrect (Waste Fraction):</strong>
        <p>This gives \\( \\frac{P_{\\text{th}}}{P_{\\text{in}}} \\), the fraction wasted, not the efficiency.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Wrong Ratio):</strong>
        <p>\\( \\frac{3.4 - 2.1}{2.1} \\) is the ratio of wasted power to output power, not the efficiency.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Misplaced Denominator):</strong>
        <p>\\( \\frac{3.4 - 2.1}{3.4} \\) gives the fraction of net gain relative to waste, which is not the efficiency.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Always remember that efficiency is <em>useful output</em> divided by <em>total input</em>, so include both output and losses in the denominator.
    </div>
    `,
    videoLink : 'https://youtu.be/H8IUmg36j74',
    practiceLink: '#',
    answerID : '7'
  },{
    mainAnswer : `
    <div class="explanation">
      <h3>✅ Why is Option A correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> The extension \\( \\Delta x \\) of a wire under tensile force is proportional to:
          \\[
          \\Delta x \\propto \\frac{L}{d^2}
          \\]
          where:
          <ul>
            <li>\\( L \\) = length of the wire</li>
            <li>\\( d \\) = diameter of the wire</li>
          </ul>
        </li>
        <li>Since the material and applied force are the same, the extension depends only on \\( \\frac{L}{d^2} \\).</li>
        <li>For the second wire, the extension is \\( 2\\Delta x \\), meaning:
          \\[
          \\frac{L_2}{d_2^2} = 2 \\times \\frac{L}{d^2}
          \\]
        </li>
        <li>In Option A:
          <ul>
            <li>Length \\( L_2 = 0.5x \\) (half the original length)</li>
            <li>Diameter \\( d_2 = 0.5d \\) (half the original diameter)</li>
          </ul>
        </li>
        <li>Calculating:
          \\[
          \\frac{L_2}{d_2^2} = \\frac{0.5x}{(0.5d)^2} = \\frac{0.5x}{0.25d^2} = 2 \\times \\frac{x}{d^2}
          \\]
          which correctly gives double the original ratio, leading to double the extension \\( 2\\Delta x \\).
        </li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option B – Incorrect (Shorter and Thicker):</strong>
        <p>Making the wire shorter and thicker greatly reduces \\( \\frac{L}{d^2} \\), decreasing the extension instead of doubling it.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Longer and Thinner):</strong>
        <p>Making the wire longer and thinner increases \\( \\frac{L}{d^2} \\) too much (by a factor of 8), not just doubling it.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Longer and Thicker):</strong>
        <p>Making the wire longer and thicker only halves the ratio \\( \\frac{L}{d^2} \\), which would decrease the extension.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Halving the diameter makes a huge difference because extension depends on the square of the diameter!
    </div>
    `,
    videoLink : 'https://youtu.be/p5W9bcX6Rzk',
    practiceLink: '#',
    answerID : '8'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option D correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> Since the box is in equilibrium, the sum of the forces acting on it must be zero. The forces acting on the box are the weight \\( \\vec{W} \\), and the tensions in the two ropes \\( \\vec{T_1} \\) and \\( \\vec{T_2} \\). The equilibrium condition gives:
          \\[
          \\vec{W} + \\vec{T_1} + \\vec{T_2} = 0
          \\]
          This equation indicates that the vector sum of all the forces must be zero. Therefore, Option D is the correct vector expression.
        </li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Wrong Relationship):</strong>
        <p>This option suggests \\( \\vec{W} + \\vec{T_1} = \\vec{T_2} \\), which does not satisfy the equilibrium condition.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (Wrong Relationship):</strong>
        <p>This option suggests \\( \\vec{W} + \\vec{T_2} = \\vec{T_1} \\), which also does not satisfy the equilibrium condition.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Wrong Relationship):</strong>
        <p>This option suggests \\( \\vec{W} = \\vec{T_1} + \\vec{T_2} \\), but does not account for the fact that the box is in equilibrium.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> In equilibrium problems, remember that the sum of all forces acting on an object must be zero. This is often used to solve for unknown forces in problems involving tension, weight, or normal forces.
    </div>
    `,
    videoLink : 'https://youtu.be/F5f1UM3imys',
    practiceLink: '#',
    answerID : '9'
  },{
    mainAnswer : `
    <div class="explanation">
      <h3>✅ Why is Option B correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> When a force is applied at an angle to the direction of motion, only the component of the force in the direction of displacement does work. The general formula is:
          \\[
          W = F\\,d\\,\\cos(\\theta)
          \\]
        </li>
      </ul>
    </div>

    <div class="calculation">
      🧮 <strong>Calculation:</strong><br><br>
      Using \\( F = 30\\,\\mathrm{N} \\), \\( d = 5\\,\\mathrm{m} \\), and \\( \\theta = 40^\\circ \\):
      \\[
        W = 30 \\times 5 \\times \\cos(40^\\circ)
          = 150 \\times 0.766
          \\approx 115\\,\\mathrm{J}
      \\]
      Hence, the work done is approximately \\(115\\,\\mathrm{J}\\), matching <strong>Option B</strong>.
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Ignoring the angle):</strong>
        <p>Calculating \\(30 \\times 5 = 150\\,\\mathrm{J}\\) assumes the force is horizontal, omitting the \\(\\cos(40^\\circ)\\) factor.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Using \\(\\sin\\) instead of \\(\\cos\\)):</strong>
        <p>\\(30 \\times 5 \\times \\sin(40^\\circ) \\approx 96\\,\\mathrm{J}\\) would give the vertical component of work, not the work along the displacement.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Misapplication of trigonometry):</strong>
        <p>23 J results from an incorrect trigonometric calculation or misunderstanding of the component direction.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Always resolve the force into the component parallel to the displacement using \\(\\cos(\\theta)\\) when computing work done by an inclined force.
    </div>
    `,
    videoLink : 'https://youtu.be/zfEOTWQmGVQ',
    practiceLink: '#',
    answerID : '10'
  }
],
  WPH11F24 : [
  {
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option D correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> Stress is defined as force per unit area. Mathematically:
          \\[
          \\text{Stress} = \\frac{\\text{Force}}{\\text{Area}}
          \\]
          The SI unit of force is \\( \\mathrm{N} \\) (newton) and the SI unit of area is \\( \\mathrm{m}^2 \\).
        </li>
        <li>Thus, the unit of stress becomes:
          \\[
          \\text{Stress Unit} = \\frac{\\mathrm{N}}{\\mathrm{m}^2} = \\mathrm{Nm}^{-2}
          \\]
          which matches Option D.
        </li>
        <li>Therefore, \\( \\mathrm{Nm}^{-2} \\) is the correct SI unit for stress.</li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Wrong Units):</strong>
        <p>\\( \\mathrm{kgm}^{-2} \\) represents mass per unit area, not stress.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (Incorrect Dimensional Formula):</strong>
        <p>\\( \\mathrm{m}^2\\mathrm{kg}^{-2} \\) does not correspond to any standard physical quantity.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Inverted Units):</strong>
        <p>\\( \\mathrm{m}^2\\mathrm{N}^{-1} \\) suggests area per unit force, which is not stress.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Always remember: Stress, Pressure, and Energy Density all share the same unit \\( \\mathrm{Nm}^{-2} \\) or \\( \\mathrm{Pa} \\) (Pascal) in SI units.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '1'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option A correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> A vector quantity has both magnitude and direction. Let’s check each term in Option A:
          <ul>
            <li><strong>Acceleration:</strong> It is a vector quantity because it has both magnitude and direction.</li>
            <li><strong>Momentum:</strong> It is also a vector quantity defined by \\( \\vec{p} = m \\vec{v} \\), where \\( m \\) is mass and \\( \\vec{v} \\) is velocity.</li>
            <li><strong>Weight:</strong> Weight is the force due to gravity and acts towards the center of the Earth. It is a vector quantity given by:
              \\[
              \\vec{W} = m \\vec{g}
              \\]
            </li>
          </ul>
          Since all three are vector quantities, Option A is correct.
        </li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option B – Incorrect (Only Scalars):</strong>
        <p>Density, time, and work done are all scalar quantities — they only have magnitude, no direction.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Mixed Quantities):</strong>
        <p>Displacement and velocity are vectors, but mass is a scalar quantity.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Mixed Quantities):</strong>
        <p>Force is a vector quantity, but kinetic energy and temperature are scalars.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Remember: Scalars have only magnitude, while vectors have both magnitude and direction. Examples of vectors include force, velocity, acceleration, and displacement.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '2'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option A correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> The elastic strain energy \\( E \\) stored in a spring is related to the force \\( F \\) and the extension \\( x \\) by:
          \\[
          E = \\frac{1}{2} F x
          \\]
        </li>
        <li>Rearranging the formula to find \\( x \\):
          \\[
          x = \\frac{2E}{F}
          \\]
        </li>
        <li>Substituting the given values:
          <ul>
            <li>Force \\( F = 3.0\\,\\mathrm{N} \\)</li>
            <li>Elastic strain energy \\( E = 0.04\\,\\mathrm{J} \\)</li>
          </ul>
        </li>
        <li>Thus, the extension \\( x \\) is:
          \\[
          x = \\frac{2 \\times 0.04}{3.0}
          \\]
          which matches Option A.
        </li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option B – Incorrect (Square root not needed):</strong>
        <p>Taking the square root is unnecessary, as the direct relationship between energy, force, and extension does not involve a square root.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Wrong arrangement):</strong>
        <p>This option incorrectly takes the square root and inverts the relation, which is not consistent with the energy formula.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Inverse relationship mistake):</strong>
        <p>This option flips the formula, incorrectly suggesting that force is divided by energy instead of energy divided by force.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Remember, for springs, the formula \\( E = \\frac{1}{2} F x \\) allows you to solve for the extension \\( x \\) directly without any square roots or inversions.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '3'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option D correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> 
          - When the cyclist is moving on a horizontal road at constant speed, the power output \\( P \\) is constant to overcome resistive forces.<br><br>
          - When the cyclist starts moving up the hill, additional power is needed to overcome the component of gravitational force along the slope. 
          Since the speed remains constant, the increase in required power happens immediately as she hits the incline.<br><br>
          - Thus, the graph should show a sudden jump to a higher constant power value, matching the behavior shown in <strong>Option D</strong>.
        </li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Gradual increase from zero):</strong>
        <p>Shows a power output starting from zero and gradually increasing, which does not match the situation described (constant speed, constant resistive force initially).</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (Gradual slope up):</strong>
        <p>Depicts a gradual rise after constant power, but the transition to uphill work is sudden, not gradual.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Sudden decrease):</strong>
        <p>Shows a sudden drop in power, which contradicts the fact that more power is needed to climb uphill, not less.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Whenever motion involves climbing a slope while maintaining constant speed, expect an immediate increase in power output due to work against gravity!
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '4'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option C correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> When a table tennis ball falls, air resistance acts upward, opposing the motion. The student's calculations <strong>ignored air resistance</strong>, assuming only gravitational acceleration \\( g \\).
          <ul>
            <li>Because of air resistance, the ball takes <strong>longer to fall</strong> than predicted. So, the actual time \\( t \\) is <strong>greater</strong> than the calculated time.</li>
            <li>Air resistance reduces the ball's acceleration and limits its final velocity. Therefore, the actual velocity \\( v \\) is <strong>less</strong> than the calculated velocity.</li>
          </ul>
        </li>
        <li>Mathematically, without air resistance, the velocity just before hitting the ground would be:
          \\[
          v = \\sqrt{2gh}
          \\]
          where \\( g \\) is gravitational acceleration and \\( h \\) is the height dropped.
        </li>
        <li>With air resistance, the ball reaches a lower velocity than \\( \\sqrt{2gh} \\) and takes longer to cover the same distance.</li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Both Less Than Calculated):</strong>
        <p>This would mean the ball falls faster and slower, which is inconsistent with the effects of air resistance.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (Time Less, Velocity Greater):</strong>
        <p>Air resistance slows objects down, so time cannot be less and velocity cannot be greater.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Both Greater Than Calculated):</strong>
        <p>Velocity cannot be greater with air resistance acting against the motion.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Always consider air resistance when dealing with real-world free-fall problems. It slows objects down compared to idealized (no air resistance) scenarios!
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '5'
  },{
    mainAnswer : `
    <div class="explanation">
      <h3>✅ Why is Option C correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> The weight \\( W \\) of the bird is supported by the tension in the string, which has vertical and horizontal components. The vertical component of the tension must balance the weight of the bird. Since the string makes an angle of 80° with each vertical post, the vertical component of the tension is given by:
          \\[
          T \\cos(80^\\circ)
          \\]
          Since there are two equal tension components supporting the bird, the total vertical component is \\( 2 T \\cos(80^\\circ) \\). To balance the bird's weight, we write:
          \\[
          2 T \\cos(80^\\circ) = W
          \\]
          Solving for \\( T \\), we get:
          \\[
          T = \\frac{W}{2 \\cos(80^\\circ)}
          \\]
          This matches Option C.
        </li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Sine Instead of Cosine):</strong>
        <p>This option uses \\( \\sin(80^\\circ) \\), which is incorrect because we are interested in the vertical component of the tension, which involves the cosine of the angle.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (Wrong Formula):</strong>
        <p>This option incorrectly multiplies \\( W \\) by \\( 2 \\sin(80^\\circ) \\), which doesn't represent the correct relationship between the tension and the weight.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Cosine and Wrong Formula):</strong>
        <p>This option uses \\( 2 \\cos(80^\\circ) \\) incorrectly, where the formula is not balanced correctly to represent the forces acting on the system.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Always remember that when dealing with forces at angles, the vertical component involves the cosine of the angle and the horizontal component involves the sine.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '6'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option C correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> The stiffness of a spring is represented by the spring constant \\( k \\), which defines the relationship between the force \\( F \\) applied to the spring and its extension \\( x \\). This relationship is given by Hooke's Law:
          \\[
          F = k \\times x
          \\]
        </li>
        <li>The graph shows how the length of the spring varies with the applied force. The gradient of the graph represents the ratio of force to extension, which is equal to the spring constant \\( k \\):
          \\[
          k = \\frac{F}{x}
          \\]
        </li>
        <li>Therefore, the stiffness of the spring is the gradient of the graph, which matches Option C.
        </li>
      </ul>
    </div>

    <div class="calculation">
      🧮 <strong>Calculation:</strong><br><br>
      The gradient of the graph is given by the ratio of the applied force \\( F \\) to the extension \\( x \\):
      \\[
      k = \\frac{F}{x}
      \\]
      This shows the spring's stiffness.
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect:</strong>
        <p>The area between the graph and the x-axis does not represent the spring constant. It would correspond to the work done to stretch the spring.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect:</strong>
        <p>The area between the graph and the y-axis is not relevant to the calculation of stiffness.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect:</strong>
        <p>Taking the inverse of the gradient does not give the stiffness of the spring.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> The spring constant \\( k \\) is a measure of the stiffness of a spring. A steeper gradient on the graph indicates a stiffer spring.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '7'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option D correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> The weight of the cube \\( W \\) can be expressed as the product of its volume and the gravitational field strength \\( g \\), which is:
          \\[
          W = V \\times p \\times g
          \\]
          where \\( p \\) is the density of the material, and \\( V \\) is the volume of the cube. The volume of the cube is given by:
          \\[
          V = L^3
          \\]
          where \\( L \\) is the length of each side of the cube.
        </li>
        <li>Substituting for \\( V \\) in the equation for \\( W \\), we get:
          \\[
          W = L^3 \\times p \\times g
          \\]
        </li>
        <li>Rearranging for \\( L \\), we have:
          \\[
          L^3 = \\frac{W}{p \\times g}
          \\]
        </li>
        <li>Taking the cube root of both sides gives the length of each side of the cube:
          \\[
          L = \\sqrt[3]{\\frac{W}{p \\times g}}
          \\]
          This matches Option D: \\( {3}\\sqrt{\\frac{W}{pg}} \\).
        </li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Wrong Formula):</strong>
        <p>This option incorrectly raises the entire expression to the power of 3 instead of taking the cube root.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (Square Root instead of Cube Root):</strong>
        <p>This option incorrectly applies the square root instead of the cube root.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Wrong Rearrangement):</strong>
        <p>This option incorrectly cubes the denominator instead of applying the cube root to the whole expression.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> When solving for the length of a cube from its volume and density, remember to take the cube root of the expression for the volume.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '8'
  },{
    mainAnswer : `
    <div class="explanation">
  <h3>✅ Why is Option C correct?</h3>
  <ul>
    <li><strong>Explanation:</strong> The yield stress is the stress at which a material begins to deform plastically. From the graph, wire P has a higher yield point (first noticeable deviation from linearity) compared to wire Q. Yield stress is found at the initial curve peak, and P clearly reaches a higher stress value earlier.
      \\[
      \\text{Yield Stress} \\propto \\text{Stress at Elastic Limit}
      \\]
      Since P's elastic limit is higher than Q's, P has a greater yield stress.
    </li>
  </ul>
</div>

<div class="other-options">
  <div>
    <strong>❌ Option A – Incorrect (Breaking stress comparison):</strong>
    <p>Wire Q has a higher final stress before breaking compared to wire P, so P does not have a greater breaking stress.</p>
  </div>
  <div>
    <strong>❌ Option B – Incorrect (Breaking strain comparison):</strong>
    <p>Wire Q stretches more before breaking, meaning Q has a greater breaking strain than P.</p>
  </div>
  <div>
    <strong>❌ Option D – Incorrect (Young modulus comparison):</strong>
    <p>Young's modulus is the slope of the initial linear part of the graph. P has a steeper slope than Q initially, indicating P has a higher Young modulus, not lower.</p>
  </div>
</div>

<div class="tip-box">
  💡 <strong>Tip:</strong> Always check the initial slope for Young modulus, the first peak for yield stress, and the final points for breaking stress and strain.
</div>

    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '9'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option D correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> From the area under the acceleration-time graph, we know that the area represents the change in velocity \\( \\Delta v \\). The velocity-time graph can then be found, and the area under it will give the distance moved by the object. The expression for the distance moved in terms of the area \\( X \\) is given by:
          \\[
          \\text{Distance} = \\frac{X t}{2}
          \\]
        </li>
        <li><strong>Explanation of the Formula:</strong> The area under the acceleration-time graph gives the change in velocity \\( \\Delta v \\), and using the relation for distance, the distance moved is proportional to the area under the graph multiplied by time, divided by 2 to account for the uniform acceleration from rest.
        </li>
        <li>Thus, the correct expression is \\( \\frac{Xt}{2} \\), which matches Option D.</li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (No time dependence):</strong>
        <p>This option fails to consider the time factor when calculating the distance moved.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (Incorrect formula):</strong>
        <p>This option divides the area by 2, but does not account for the time variable properly in the distance formula.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Wrong multiplication with time):</strong>
        <p>This option multiplies the area by time, but does not divide by 2 as required in the distance formula.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Always check that both time and acceleration are correctly accounted for in motion problems involving uniform acceleration from rest.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '10'
  }
],
  
  //TOPIC-WISE Question

  WPH11MVAAE : [ //NOT DONE
  {
    mainAnswer : `
    <div class="explanation">
      <h3>✅ Why is Option A correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> At \\( t = 6\\,\\mathrm{s} \\), the graph shows the student at a displacement of \\(2.0\,\\mathrm{m}\\). The velocity is the gradient (slope) of the displacement-time graph:
          \\[
          v = \\frac{\\Delta s}{\\Delta t}
          \\]
          The student moves from \\(-1.0\\,\\mathrm{m}\\) to \\(2.0\\,\\mathrm{m}\\) over \\(6\\,\\mathrm{s}\\), so:
          \\[
          \\Delta s = 2.0 - (-1.0) = 3.0\\,\\mathrm{m}
          \\]
          \\[
          v = \\frac{3.0}{6} = 0.5\\,\\mathrm{m\\,s^{-1}}
          \\]
          Therefore, the final displacement is \\(2.0\\,\\mathrm{m}\\) and the velocity is \\(0.5\\,\\mathrm{m\\,s^{-1}}\\).
        </li>
      </ul>
    </div>

    <div class="calculation">
      🧮 <strong>Calculation:</strong><br><br>
      Change in displacement:
      \\[
      \\Delta s = 2.0 - (-1.0) = 3.0\\,\\mathrm{m}
      \\]
      Time:
      \\[
      \\Delta t = 6\\,\\mathrm{s}
      \\]
      Velocity:
      \\[
      v = \\frac{3.0}{6} = 0.5\\,\\mathrm{m\\,s^{-1}}
      \\]
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option B – Incorrect (Wrong displacement):</strong>
        <p>Final displacement is \\(2.0\\,\\mathrm{m}\\), not \\(3.0\\,\\mathrm{m}\\).</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Wrong displacement and velocity):</strong>
        <p>Final displacement is not \\(5.0\\,\\mathrm{m}\\), and the velocity is not \\(2.0\\,\\mathrm{m\\,s^{-1}}\\).</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Wrong velocity):</strong>
        <p>Velocity is \\(0.5\\,\\mathrm{m\\,s^{-1}}\\), not \\(2.0\\,\\mathrm{m\\,s^{-1}}\\).</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Final displacement is the position read directly from the graph at the given time. Velocity is found using the change in displacement divided by the time taken!
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '1'
  },{
    mainAnswer: `
        <div class="explanation">
      <h3>✅ Why is Option D correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> Physical quantities can be classified as vectors or scalars based on their nature:
          <ul>
            <li><strong>Force</strong>: This is a vector quantity, as it has both magnitude and direction.</li>
            <li><strong>Mass</strong>: Mass is a scalar quantity because it only has magnitude and no direction.</li>
            <li><strong>Acceleration</strong>: This is also a vector quantity, as it describes a change in velocity in a particular direction.</li>
          </ul>
          Therefore, the correct classification is:
          \\[
          \\text{Force: vector, Mass: scalar, Acceleration: vector}
          \\]
          which matches Option D.
        </li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Wrong Classification):</strong>
        <p>Force is a vector, not a scalar, so this option is incorrect.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (Wrong Classification of Acceleration):</strong>
        <p>Acceleration is a vector, not a scalar, so this option is incorrect.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Wrong Classification of Mass):</strong>
        <p>Mass is a scalar, not a vector, so this option is incorrect.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Always remember that scalar quantities have only magnitude, whereas vector quantities have both magnitude and direction.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '2'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option A correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> In a velocity-time graph:
          <ul>
            <li>A positive, decreasing velocity means the particle is slowing down in the positive direction — displacement increases but at a decreasing rate (curves upwards and flattens).</li>
            <li>Constant velocity means linear displacement (straight line).</li>
            <li>Negative velocity means the particle moves in the opposite direction — displacement decreases.</li>
          </ul>
          Thus, the displacement-time graph should:
          <ul>
            <li>Curve upward initially (positive, decreasing velocity).</li>
            <li>Then become a straight line (constant positive velocity).</li>
            <li>Finally curve downward (negative velocity).</li>
          </ul>
          This matches the shape shown in Option A.
        </li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option B – Incorrect (No variation):</strong>
        <p>Shows no change in displacement when the particle is clearly moving.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Wrong curve shapes):</strong>
        <p>Shape is wrong for the sequence of positive to negative velocity.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Sudden jump, not smooth motion):</strong>
        <p>Displacement should vary smoothly, not with abrupt jumps.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Positive velocity means increasing displacement, negative velocity means decreasing displacement. The steeper the velocity, the steeper the displacement graph!
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '3'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option C correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> The problem gives the vertical and horizontal components of velocity, which are perpendicular to each other. The resultant velocity is found using the Pythagorean theorem:</li>
        <ul>
          <li>The magnitude of the resultant velocity \\( v \\) is given by: 
            \\[
            v = \\sqrt{v_{\\text{vertical}}^2 + v_{\\text{horizontal}}^2}
            \\]
            Substituting the values:
            \\[
            v = \\sqrt{5^2 + 8^2} = \\sqrt{25 + 64} = \\sqrt{89} 
            \\]
            Hence, the magnitude of the resultant velocity is \\( \\sqrt{8^2 + 5^2} \\), which matches Option C.
          </li>
        </ul>
        <li><strong>For the angle,</strong> we can use the tangent of the angle \\( \\theta \\) between the resultant velocity and the vertical component of the velocity:</li>
        <ul>
          <li>The angle \\( \\theta \\) is given by:
            \\[
            \\theta = \\tan^{-1} \\left( \\frac{v_{\\text{horizontal}}}{v_{\\text{vertical}}} \\right)
            \\]
            Substituting the values:
            \\[
            \\theta = \\tan^{-1} \\left( \\frac{8}{5} \\right)
            \\]
            Hence, the angle is \\( \\tan^{-1}(\\frac{8}{5}) \\), which matches Option C.
          </li>
        </ul>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Incorrect Formula for Magnitude):</strong>
        <p>This option incorrectly uses \\( \\sqrt{8^2 - 5^2} \\) for the magnitude, which is not applicable for finding the magnitude of the resultant velocity.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (Incorrect Formula for Angle):</strong>
        <p>This option incorrectly uses \\( \\sin^{-1} \\) instead of \\( \\tan^{-1} \\) for calculating the angle.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Incorrect Formula for Angle):</strong>
        <p>This option incorrectly uses \\( \\sin^{-1} \\) for calculating the angle, which is not the correct trigonometric function in this case.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> When dealing with perpendicular velocity components, always use the Pythagorean theorem to find the magnitude, and use \\( \\tan^{-1} \\) to find the angle.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '4'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option C correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> The formula for displacement \\( s \\) under constant acceleration from rest is:
          \\[
          s = \\frac{1}{2} a t^2
          \\]
          where:
          <ul>
            <li>\\( s \\) is the displacement (0.32 m),</li>
            <li>\\( a \\) is the acceleration due to gravity, and</li>
            <li>\\( t \\) is the time (0.63 s).</li>
          </ul>
        </li>
        <li>Rearranging the formula to solve for \\( a \\), we get:
          \\[
          a = \\frac{2s}{t^2}
          \\]
        </li>
        <li>Substituting the given values for displacement and time:
          \\[
          a = \\frac{2 \\times 0.32}{0.63^2}
          \\]
        </li>
        <li>Thus, Option C: \\( \\frac{2 \\times 0.32}{0.63^2} \\) is correct.</li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Wrong Formula):</strong>
        <p>This option lacks \\( t^2 \\) in the denominator and is not correct.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (Incorrect Denominator):</strong>
        <p>This option incorrectly uses \\( t^2 \\) in the denominator but fails to double the displacement.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Incorrect Formula):</strong>
        <p>This option uses the wrong formula and does not correctly account for the displacement's relationship with time squared.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Remember that the displacement due to constant acceleration from rest is proportional to the square of time, so always make sure to use the correct formula and units!
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '5'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option B correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> According to Stokes' law, the terminal velocity \\(v_t\\) of a small sphere falling through a viscous liquid is given by:
          \\[
          v_t = \\frac{2r^2 (\\rho - \\rho_l)g}{9\\eta}
          \\]
          where:
          <ul>
            <li>\\(r\\) is the radius of the sphere</li>
            <li>\\(\\rho\\) is the density of the sphere</li>
            <li>\\(\\rho_l\\) is the density of the liquid</li>
            <li>\\(g\\) is the acceleration due to gravity</li>
            <li>\\(\\eta\\) is the viscosity of the liquid</li>
          </ul>
          <br>
          If the viscosity \\(\\eta\\) increases, the terminal velocity \\(v_t\\) decreases for the same mass. 
          Therefore, the gradient of the terminal velocity vs mass graph would be smaller for a more viscous liquid.
        </li>
      </ul>
    </div>

    <div class="calculation">
      🧮 <strong>Calculation (Conceptual):</strong><br><br>
      Since \\( v_t \\propto \\frac{1}{\\eta} \\), an increase in \\(\\eta\\) reduces \\(v_t\\) for the same mass.<br>
      Hence, the slope (gradient) of the graph becomes smaller for a liquid of greater viscosity.
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Greater gradient):</strong>
        <p>Higher viscosity resists motion more, reducing terminal velocity, not increasing it.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Variable gradient):</strong>
        <p>The relationship remains linear; it does not become variable unless other factors like diameter change.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Same gradient):</strong>
        <p>Viscosity directly affects terminal velocity, so the gradient cannot stay the same when viscosity changes.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Remember, terminal velocity decreases when the liquid becomes thicker (more viscous)!
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '6'
  },{
    mainAnswer : `
    <div class="explanation">
      <h3>✅ Why is Option B correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> According to Newton's Third Law of Motion, when one object exerts a force on a second object, the second object exerts an equal and opposite force on the first object. In this case:</li>
        <li>The person exerts a force \\( Q \\) on the trolley (action), and the trolley exerts an equal and opposite force \\( R \\) on the person (reaction). This pair of forces follows Newton's Third Law.</li>
        <li>These forces are equal in magnitude and opposite in direction, which makes \\( Q \\) and \\( R \\) a Newton's Third Law pair.</li>
      </ul>
    </div>

    <div class="calculation">
      🧮 <strong>Explanation for the Correct Pair:</strong><br><br>
      The force \\( Q \\) is exerted by the person on the trolley, and the force \\( R \\) is the reaction force exerted by the trolley on the person. By Newton's Third Law, these forces form a pair because they are equal in magnitude and opposite in direction.
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Wrong Force Pair):</strong>
        <p>The force \\( P \\), exerted by the floor on the person, and \\( R \\), exerted by the trolley on the person, do not form a Newton's Third Law pair. They are forces from different interactions (floor-person and trolley-person) and not equal and opposite to each other.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Unrelated Forces):</strong>
        <p>The force \\( Q \\), exerted by the person on the trolley, and the drag force \\( S \\), do not form a Newton's Third Law pair. The drag force is an external force acting on the trolley, not a reaction to \\( Q \\).</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (No Third Law Pair):</strong>
        <p>The force \\( P \\), exerted by the floor on the person, and the drag force \\( S \\), do not form a Newton's Third Law pair. They act on different objects and are not related by action-reaction pairs.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Newton's Third Law pairs involve forces that act on two different objects and are equal in magnitude, opposite in direction, and occur due to the interaction between the objects.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '7'
  },{
    mainAnswer : `
    <div class="explanation">
      <h3>✅ Why is Option A correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> The force required to break a wire depends on the cross-sectional area of the wire. The tensile strength of the material is constant, so the force required to break the wire is directly proportional to the cross-sectional area, which is proportional to the square of the diameter.</li>
        <li>The formula for the tensile force required to break the wire is given by:</li>
        <ul>
          <li><strong>Force</strong> \\( F = \\sigma A \\), where \\( \\sigma \\) is the tensile strength and \\( A \\) is the cross-sectional area.</li>
        </ul>
        <li>The cross-sectional area of a wire is given by:</li>
        <ul>
          <li><strong>Area</strong> \\( A = \\pi d^2/4 \\), where \\( d \\) is the diameter of the wire.</li>
        </ul>
        <li>If the second wire has twice the diameter, its cross-sectional area will increase by a factor of four (since area is proportional to the square of the diameter). Therefore, the force required to break the second wire will be four times greater than the force required for the first wire.</li>
        <li>Thus, the force required to break the second wire is \\( 4T \\), which matches Option A.</li>
      </ul>
    </div>

    <div class="calculation">
      🧮 <strong>Calculation:</strong><br><br>
      Given:<br>
      Force required to break the first wire \\( T \\).<br>
      Diameter of the second wire is twice that of the first wire.<br><br>
      
      The force required to break the second wire is given by:<br>
      \\[
      F_{\\text{second}} = 4T
      \\]
      Thus, the force required is four times the force required for the first wire.
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option B – Incorrect:</strong>
        <p>This option suggests a linear relationship between force and diameter, which is incorrect. The force required is proportional to the area, which depends on the square of the diameter.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect:</strong>
        <p>This option incorrectly suggests a relationship that does not account for the square of the diameter.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect:</strong>
        <p>This option suggests a force smaller than that required for the first wire, which is incorrect as the second wire has a larger cross-sectional area.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> When dealing with the tensile force of a wire, remember that the force required to break the wire is proportional to the cross-sectional area, which depends on the square of the wire's diameter.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '8'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option C correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> For the beam to be in equilibrium:
          <ul>
            <li>The sum of the upward forces must equal the downward force (weight).</li>
            <li>The sum of the clockwise moments must equal the sum of the anticlockwise moments.</li>
          </ul>
          Therefore, we have:
          \\[
          P + Q = W
          \\]
          Taking moments about the left support (where \\(P\\) acts):
          \\[
          Q \\times \\text{distance between supports} = W \\times \\text{distance of W from P}
          \\]
          Since \\(W\\) is closer to \\(P\\) than to \\(Q\\), \\(Q\\) must be larger than \\(P\\) to balance the moments.
          Thus:
          \\[
          Q > P
          \\]
        </li>
      </ul>
    </div>


    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (\\(P > Q\\)):</strong>
        <p>If \\(P\\) were greater than \\(Q\\), the moments would not balance because \\(W\\) is closer to \\(P\\).</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (\\(Q > W\\)):</strong>
        <p>\\(Q\\) alone cannot be greater than \\(W\\) because \\(P + Q = W\\); otherwise, the net upward force would be greater than \\(W\\).</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (\\((P + Q) > W\\)):</strong>
        <p>In equilibrium, \\(P + Q\\) must equal \\(W\\), not be greater than \\(W\\).</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Always apply both the conditions for equilibrium: (1) force balance and (2) moment balance!
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '9'
  },{
    mainAnswer : `
    <div class="explanation">
      <h3>✅ Why is Option B correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> Let's break down each pair of units to identify if they are equivalent or not.</li>
        <li><strong>Option A: Unit 1: Js⁻¹; Unit 2: W</strong></li>
        <ul>
          <li>The unit \\( \\text{Js}^{-1} \\) (joule-seconds inverse) represents power, which is equivalent to the unit \\( \\text{W} \\) (watts). These units are equivalent.</li>
        </ul>
        <li><strong>Option B: Unit 1: kgms⁻²; Unit 2: Ns</strong></li>
        <ul>
          <li>The unit \\( \\text{kgms}^{-2} \\) (kilogram meter per second squared) represents force (newton), while \\( \\text{Ns} \\) (newton-second) represents momentum. These are different physical quantities, so they are not equivalent.</li>
        </ul>
        <li><strong>Option C: Unit 1: Nkg⁻¹; Unit 2: ms⁻²</strong></li>
        <ul>
          <li>The unit \\( \\text{Nkg}^{-1} \\) (newton per kilogram) represents gravitational field strength, which has the same units as \\( \\text{ms}^{-2} \\) (meters per second squared), which represents acceleration. These units are equivalent.</li>
        </ul>
        <li><strong>Option D: Unit 1: Nm; Unit 2: J</strong></li>
        <ul>
          <li>The unit \\( \\text{Nm} \\) (newton meter) is equivalent to the unit \\( \\text{J} \\) (joule), both representing energy or work. These units are equivalent.</li>
        </ul>
      </ul>
      <p>Thus, Option B is the correct answer, as the units \\( \\text{kgms}^{-2} \\) and \\( \\text{Ns} \\) are not equivalent.</p>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect:</strong>
        <p>Both \\( \\text{Js}^{-1} \\) and \\( \\text{W} \\) are equivalent as they represent power.</p>
      </div>
      <div>
        <strong>✅ Option B – Correct:</strong>
        <p>\\( \\text{kgms}^{-2} \\) and \\( \\text{Ns} \\) are not equivalent because one represents force and the other represents momentum.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect:</strong>
        <p>Both \\( \\text{Nkg}^{-1} \\) and \\( \\text{ms}^{-2} \\) are equivalent as they represent acceleration or gravitational field strength.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect:</strong>
        <p>Both \\( \\text{Nm} \\) and \\( \\text{J} \\) are equivalent as they represent energy or work.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Make sure to distinguish between force and momentum. They have different physical meanings and are not interchangeable.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '10'
  }  
],
  WPH11MVAAM : [ //NOT DONE
  {
    mainAnswer : `
    <div class="explanation">
      <h3>✅ Why is Option A correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> At \\( t = 6\\,\\mathrm{s} \\), the graph shows the student at a displacement of \\(2.0\,\\mathrm{m}\\). The velocity is the gradient (slope) of the displacement-time graph:
          \\[
          v = \\frac{\\Delta s}{\\Delta t}
          \\]
          The student moves from \\(-1.0\\,\\mathrm{m}\\) to \\(2.0\\,\\mathrm{m}\\) over \\(6\\,\\mathrm{s}\\), so:
          \\[
          \\Delta s = 2.0 - (-1.0) = 3.0\\,\\mathrm{m}
          \\]
          \\[
          v = \\frac{3.0}{6} = 0.5\\,\\mathrm{m\\,s^{-1}}
          \\]
          Therefore, the final displacement is \\(2.0\\,\\mathrm{m}\\) and the velocity is \\(0.5\\,\\mathrm{m\\,s^{-1}}\\).
        </li>
      </ul>
    </div>

    <div class="calculation">
      🧮 <strong>Calculation:</strong><br><br>
      Change in displacement:
      \\[
      \\Delta s = 2.0 - (-1.0) = 3.0\\,\\mathrm{m}
      \\]
      Time:
      \\[
      \\Delta t = 6\\,\\mathrm{s}
      \\]
      Velocity:
      \\[
      v = \\frac{3.0}{6} = 0.5\\,\\mathrm{m\\,s^{-1}}
      \\]
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option B – Incorrect (Wrong displacement):</strong>
        <p>Final displacement is \\(2.0\\,\\mathrm{m}\\), not \\(3.0\\,\\mathrm{m}\\).</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Wrong displacement and velocity):</strong>
        <p>Final displacement is not \\(5.0\\,\\mathrm{m}\\), and the velocity is not \\(2.0\\,\\mathrm{m\\,s^{-1}}\\).</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Wrong velocity):</strong>
        <p>Velocity is \\(0.5\\,\\mathrm{m\\,s^{-1}}\\), not \\(2.0\\,\\mathrm{m\\,s^{-1}}\\).</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Final displacement is the position read directly from the graph at the given time. Velocity is found using the change in displacement divided by the time taken!
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '1'
  },{
    mainAnswer: `
        <div class="explanation">
      <h3>✅ Why is Option D correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> Physical quantities can be classified as vectors or scalars based on their nature:
          <ul>
            <li><strong>Force</strong>: This is a vector quantity, as it has both magnitude and direction.</li>
            <li><strong>Mass</strong>: Mass is a scalar quantity because it only has magnitude and no direction.</li>
            <li><strong>Acceleration</strong>: This is also a vector quantity, as it describes a change in velocity in a particular direction.</li>
          </ul>
          Therefore, the correct classification is:
          \\[
          \\text{Force: vector, Mass: scalar, Acceleration: vector}
          \\]
          which matches Option D.
        </li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Wrong Classification):</strong>
        <p>Force is a vector, not a scalar, so this option is incorrect.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (Wrong Classification of Acceleration):</strong>
        <p>Acceleration is a vector, not a scalar, so this option is incorrect.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Wrong Classification of Mass):</strong>
        <p>Mass is a scalar, not a vector, so this option is incorrect.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Always remember that scalar quantities have only magnitude, whereas vector quantities have both magnitude and direction.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '2'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option A correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> In a velocity-time graph:
          <ul>
            <li>A positive, decreasing velocity means the particle is slowing down in the positive direction — displacement increases but at a decreasing rate (curves upwards and flattens).</li>
            <li>Constant velocity means linear displacement (straight line).</li>
            <li>Negative velocity means the particle moves in the opposite direction — displacement decreases.</li>
          </ul>
          Thus, the displacement-time graph should:
          <ul>
            <li>Curve upward initially (positive, decreasing velocity).</li>
            <li>Then become a straight line (constant positive velocity).</li>
            <li>Finally curve downward (negative velocity).</li>
          </ul>
          This matches the shape shown in Option A.
        </li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option B – Incorrect (No variation):</strong>
        <p>Shows no change in displacement when the particle is clearly moving.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Wrong curve shapes):</strong>
        <p>Shape is wrong for the sequence of positive to negative velocity.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Sudden jump, not smooth motion):</strong>
        <p>Displacement should vary smoothly, not with abrupt jumps.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Positive velocity means increasing displacement, negative velocity means decreasing displacement. The steeper the velocity, the steeper the displacement graph!
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '3'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option C correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> The problem gives the vertical and horizontal components of velocity, which are perpendicular to each other. The resultant velocity is found using the Pythagorean theorem:</li>
        <ul>
          <li>The magnitude of the resultant velocity \\( v \\) is given by: 
            \\[
            v = \\sqrt{v_{\\text{vertical}}^2 + v_{\\text{horizontal}}^2}
            \\]
            Substituting the values:
            \\[
            v = \\sqrt{5^2 + 8^2} = \\sqrt{25 + 64} = \\sqrt{89} 
            \\]
            Hence, the magnitude of the resultant velocity is \\( \\sqrt{8^2 + 5^2} \\), which matches Option C.
          </li>
        </ul>
        <li><strong>For the angle,</strong> we can use the tangent of the angle \\( \\theta \\) between the resultant velocity and the vertical component of the velocity:</li>
        <ul>
          <li>The angle \\( \\theta \\) is given by:
            \\[
            \\theta = \\tan^{-1} \\left( \\frac{v_{\\text{horizontal}}}{v_{\\text{vertical}}} \\right)
            \\]
            Substituting the values:
            \\[
            \\theta = \\tan^{-1} \\left( \\frac{8}{5} \\right)
            \\]
            Hence, the angle is \\( \\tan^{-1}(\\frac{8}{5}) \\), which matches Option C.
          </li>
        </ul>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Incorrect Formula for Magnitude):</strong>
        <p>This option incorrectly uses \\( \\sqrt{8^2 - 5^2} \\) for the magnitude, which is not applicable for finding the magnitude of the resultant velocity.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (Incorrect Formula for Angle):</strong>
        <p>This option incorrectly uses \\( \\sin^{-1} \\) instead of \\( \\tan^{-1} \\) for calculating the angle.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Incorrect Formula for Angle):</strong>
        <p>This option incorrectly uses \\( \\sin^{-1} \\) for calculating the angle, which is not the correct trigonometric function in this case.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> When dealing with perpendicular velocity components, always use the Pythagorean theorem to find the magnitude, and use \\( \\tan^{-1} \\) to find the angle.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '4'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option C correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> The formula for displacement \\( s \\) under constant acceleration from rest is:
          \\[
          s = \\frac{1}{2} a t^2
          \\]
          where:
          <ul>
            <li>\\( s \\) is the displacement (0.32 m),</li>
            <li>\\( a \\) is the acceleration due to gravity, and</li>
            <li>\\( t \\) is the time (0.63 s).</li>
          </ul>
        </li>
        <li>Rearranging the formula to solve for \\( a \\), we get:
          \\[
          a = \\frac{2s}{t^2}
          \\]
        </li>
        <li>Substituting the given values for displacement and time:
          \\[
          a = \\frac{2 \\times 0.32}{0.63^2}
          \\]
        </li>
        <li>Thus, Option C: \\( \\frac{2 \\times 0.32}{0.63^2} \\) is correct.</li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Wrong Formula):</strong>
        <p>This option lacks \\( t^2 \\) in the denominator and is not correct.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (Incorrect Denominator):</strong>
        <p>This option incorrectly uses \\( t^2 \\) in the denominator but fails to double the displacement.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Incorrect Formula):</strong>
        <p>This option uses the wrong formula and does not correctly account for the displacement's relationship with time squared.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Remember that the displacement due to constant acceleration from rest is proportional to the square of time, so always make sure to use the correct formula and units!
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '5'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option B correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> According to Stokes' law, the terminal velocity \\(v_t\\) of a small sphere falling through a viscous liquid is given by:
          \\[
          v_t = \\frac{2r^2 (\\rho - \\rho_l)g}{9\\eta}
          \\]
          where:
          <ul>
            <li>\\(r\\) is the radius of the sphere</li>
            <li>\\(\\rho\\) is the density of the sphere</li>
            <li>\\(\\rho_l\\) is the density of the liquid</li>
            <li>\\(g\\) is the acceleration due to gravity</li>
            <li>\\(\\eta\\) is the viscosity of the liquid</li>
          </ul>
          <br>
          If the viscosity \\(\\eta\\) increases, the terminal velocity \\(v_t\\) decreases for the same mass. 
          Therefore, the gradient of the terminal velocity vs mass graph would be smaller for a more viscous liquid.
        </li>
      </ul>
    </div>

    <div class="calculation">
      🧮 <strong>Calculation (Conceptual):</strong><br><br>
      Since \\( v_t \\propto \\frac{1}{\\eta} \\), an increase in \\(\\eta\\) reduces \\(v_t\\) for the same mass.<br>
      Hence, the slope (gradient) of the graph becomes smaller for a liquid of greater viscosity.
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Greater gradient):</strong>
        <p>Higher viscosity resists motion more, reducing terminal velocity, not increasing it.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Variable gradient):</strong>
        <p>The relationship remains linear; it does not become variable unless other factors like diameter change.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Same gradient):</strong>
        <p>Viscosity directly affects terminal velocity, so the gradient cannot stay the same when viscosity changes.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Remember, terminal velocity decreases when the liquid becomes thicker (more viscous)!
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '6'
  },{
    mainAnswer : `
    <div class="explanation">
      <h3>✅ Why is Option B correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> According to Newton's Third Law of Motion, when one object exerts a force on a second object, the second object exerts an equal and opposite force on the first object. In this case:</li>
        <li>The person exerts a force \\( Q \\) on the trolley (action), and the trolley exerts an equal and opposite force \\( R \\) on the person (reaction). This pair of forces follows Newton's Third Law.</li>
        <li>These forces are equal in magnitude and opposite in direction, which makes \\( Q \\) and \\( R \\) a Newton's Third Law pair.</li>
      </ul>
    </div>

    <div class="calculation">
      🧮 <strong>Explanation for the Correct Pair:</strong><br><br>
      The force \\( Q \\) is exerted by the person on the trolley, and the force \\( R \\) is the reaction force exerted by the trolley on the person. By Newton's Third Law, these forces form a pair because they are equal in magnitude and opposite in direction.
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Wrong Force Pair):</strong>
        <p>The force \\( P \\), exerted by the floor on the person, and \\( R \\), exerted by the trolley on the person, do not form a Newton's Third Law pair. They are forces from different interactions (floor-person and trolley-person) and not equal and opposite to each other.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Unrelated Forces):</strong>
        <p>The force \\( Q \\), exerted by the person on the trolley, and the drag force \\( S \\), do not form a Newton's Third Law pair. The drag force is an external force acting on the trolley, not a reaction to \\( Q \\).</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (No Third Law Pair):</strong>
        <p>The force \\( P \\), exerted by the floor on the person, and the drag force \\( S \\), do not form a Newton's Third Law pair. They act on different objects and are not related by action-reaction pairs.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Newton's Third Law pairs involve forces that act on two different objects and are equal in magnitude, opposite in direction, and occur due to the interaction between the objects.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '7'
  },{
    mainAnswer : `
    <div class="explanation">
      <h3>✅ Why is Option A correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> The force required to break a wire depends on the cross-sectional area of the wire. The tensile strength of the material is constant, so the force required to break the wire is directly proportional to the cross-sectional area, which is proportional to the square of the diameter.</li>
        <li>The formula for the tensile force required to break the wire is given by:</li>
        <ul>
          <li><strong>Force</strong> \\( F = \\sigma A \\), where \\( \\sigma \\) is the tensile strength and \\( A \\) is the cross-sectional area.</li>
        </ul>
        <li>The cross-sectional area of a wire is given by:</li>
        <ul>
          <li><strong>Area</strong> \\( A = \\pi d^2/4 \\), where \\( d \\) is the diameter of the wire.</li>
        </ul>
        <li>If the second wire has twice the diameter, its cross-sectional area will increase by a factor of four (since area is proportional to the square of the diameter). Therefore, the force required to break the second wire will be four times greater than the force required for the first wire.</li>
        <li>Thus, the force required to break the second wire is \\( 4T \\), which matches Option A.</li>
      </ul>
    </div>

    <div class="calculation">
      🧮 <strong>Calculation:</strong><br><br>
      Given:<br>
      Force required to break the first wire \\( T \\).<br>
      Diameter of the second wire is twice that of the first wire.<br><br>
      
      The force required to break the second wire is given by:<br>
      \\[
      F_{\\text{second}} = 4T
      \\]
      Thus, the force required is four times the force required for the first wire.
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option B – Incorrect:</strong>
        <p>This option suggests a linear relationship between force and diameter, which is incorrect. The force required is proportional to the area, which depends on the square of the diameter.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect:</strong>
        <p>This option incorrectly suggests a relationship that does not account for the square of the diameter.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect:</strong>
        <p>This option suggests a force smaller than that required for the first wire, which is incorrect as the second wire has a larger cross-sectional area.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> When dealing with the tensile force of a wire, remember that the force required to break the wire is proportional to the cross-sectional area, which depends on the square of the wire's diameter.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '8'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option C correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> For the beam to be in equilibrium:
          <ul>
            <li>The sum of the upward forces must equal the downward force (weight).</li>
            <li>The sum of the clockwise moments must equal the sum of the anticlockwise moments.</li>
          </ul>
          Therefore, we have:
          \\[
          P + Q = W
          \\]
          Taking moments about the left support (where \\(P\\) acts):
          \\[
          Q \\times \\text{distance between supports} = W \\times \\text{distance of W from P}
          \\]
          Since \\(W\\) is closer to \\(P\\) than to \\(Q\\), \\(Q\\) must be larger than \\(P\\) to balance the moments.
          Thus:
          \\[
          Q > P
          \\]
        </li>
      </ul>
    </div>


    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (\\(P > Q\\)):</strong>
        <p>If \\(P\\) were greater than \\(Q\\), the moments would not balance because \\(W\\) is closer to \\(P\\).</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (\\(Q > W\\)):</strong>
        <p>\\(Q\\) alone cannot be greater than \\(W\\) because \\(P + Q = W\\); otherwise, the net upward force would be greater than \\(W\\).</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (\\((P + Q) > W\\)):</strong>
        <p>In equilibrium, \\(P + Q\\) must equal \\(W\\), not be greater than \\(W\\).</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Always apply both the conditions for equilibrium: (1) force balance and (2) moment balance!
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '9'
  },{
    mainAnswer : `
    <div class="explanation">
      <h3>✅ Why is Option B correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> Let's break down each pair of units to identify if they are equivalent or not.</li>
        <li><strong>Option A: Unit 1: Js⁻¹; Unit 2: W</strong></li>
        <ul>
          <li>The unit \\( \\text{Js}^{-1} \\) (joule-seconds inverse) represents power, which is equivalent to the unit \\( \\text{W} \\) (watts). These units are equivalent.</li>
        </ul>
        <li><strong>Option B: Unit 1: kgms⁻²; Unit 2: Ns</strong></li>
        <ul>
          <li>The unit \\( \\text{kgms}^{-2} \\) (kilogram meter per second squared) represents force (newton), while \\( \\text{Ns} \\) (newton-second) represents momentum. These are different physical quantities, so they are not equivalent.</li>
        </ul>
        <li><strong>Option C: Unit 1: Nkg⁻¹; Unit 2: ms⁻²</strong></li>
        <ul>
          <li>The unit \\( \\text{Nkg}^{-1} \\) (newton per kilogram) represents gravitational field strength, which has the same units as \\( \\text{ms}^{-2} \\) (meters per second squared), which represents acceleration. These units are equivalent.</li>
        </ul>
        <li><strong>Option D: Unit 1: Nm; Unit 2: J</strong></li>
        <ul>
          <li>The unit \\( \\text{Nm} \\) (newton meter) is equivalent to the unit \\( \\text{J} \\) (joule), both representing energy or work. These units are equivalent.</li>
        </ul>
      </ul>
      <p>Thus, Option B is the correct answer, as the units \\( \\text{kgms}^{-2} \\) and \\( \\text{Ns} \\) are not equivalent.</p>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect:</strong>
        <p>Both \\( \\text{Js}^{-1} \\) and \\( \\text{W} \\) are equivalent as they represent power.</p>
      </div>
      <div>
        <strong>✅ Option B – Correct:</strong>
        <p>\\( \\text{kgms}^{-2} \\) and \\( \\text{Ns} \\) are not equivalent because one represents force and the other represents momentum.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect:</strong>
        <p>Both \\( \\text{Nkg}^{-1} \\) and \\( \\text{ms}^{-2} \\) are equivalent as they represent acceleration or gravitational field strength.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect:</strong>
        <p>Both \\( \\text{Nm} \\) and \\( \\text{J} \\) are equivalent as they represent energy or work.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Make sure to distinguish between force and momentum. They have different physical meanings and are not interchangeable.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '10'
  }  
],
  WPH11MVAAH : [ //NOT DONE
  {
    mainAnswer : `
    <div class="explanation">
      <h3>✅ Why is Option A correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> At \\( t = 6\\,\\mathrm{s} \\), the graph shows the student at a displacement of \\(2.0\,\\mathrm{m}\\). The velocity is the gradient (slope) of the displacement-time graph:
          \\[
          v = \\frac{\\Delta s}{\\Delta t}
          \\]
          The student moves from \\(-1.0\\,\\mathrm{m}\\) to \\(2.0\\,\\mathrm{m}\\) over \\(6\\,\\mathrm{s}\\), so:
          \\[
          \\Delta s = 2.0 - (-1.0) = 3.0\\,\\mathrm{m}
          \\]
          \\[
          v = \\frac{3.0}{6} = 0.5\\,\\mathrm{m\\,s^{-1}}
          \\]
          Therefore, the final displacement is \\(2.0\\,\\mathrm{m}\\) and the velocity is \\(0.5\\,\\mathrm{m\\,s^{-1}}\\).
        </li>
      </ul>
    </div>

    <div class="calculation">
      🧮 <strong>Calculation:</strong><br><br>
      Change in displacement:
      \\[
      \\Delta s = 2.0 - (-1.0) = 3.0\\,\\mathrm{m}
      \\]
      Time:
      \\[
      \\Delta t = 6\\,\\mathrm{s}
      \\]
      Velocity:
      \\[
      v = \\frac{3.0}{6} = 0.5\\,\\mathrm{m\\,s^{-1}}
      \\]
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option B – Incorrect (Wrong displacement):</strong>
        <p>Final displacement is \\(2.0\\,\\mathrm{m}\\), not \\(3.0\\,\\mathrm{m}\\).</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Wrong displacement and velocity):</strong>
        <p>Final displacement is not \\(5.0\\,\\mathrm{m}\\), and the velocity is not \\(2.0\\,\\mathrm{m\\,s^{-1}}\\).</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Wrong velocity):</strong>
        <p>Velocity is \\(0.5\\,\\mathrm{m\\,s^{-1}}\\), not \\(2.0\\,\\mathrm{m\\,s^{-1}}\\).</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Final displacement is the position read directly from the graph at the given time. Velocity is found using the change in displacement divided by the time taken!
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '1'
  },{
    mainAnswer: `
        <div class="explanation">
      <h3>✅ Why is Option D correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> Physical quantities can be classified as vectors or scalars based on their nature:
          <ul>
            <li><strong>Force</strong>: This is a vector quantity, as it has both magnitude and direction.</li>
            <li><strong>Mass</strong>: Mass is a scalar quantity because it only has magnitude and no direction.</li>
            <li><strong>Acceleration</strong>: This is also a vector quantity, as it describes a change in velocity in a particular direction.</li>
          </ul>
          Therefore, the correct classification is:
          \\[
          \\text{Force: vector, Mass: scalar, Acceleration: vector}
          \\]
          which matches Option D.
        </li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Wrong Classification):</strong>
        <p>Force is a vector, not a scalar, so this option is incorrect.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (Wrong Classification of Acceleration):</strong>
        <p>Acceleration is a vector, not a scalar, so this option is incorrect.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Wrong Classification of Mass):</strong>
        <p>Mass is a scalar, not a vector, so this option is incorrect.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Always remember that scalar quantities have only magnitude, whereas vector quantities have both magnitude and direction.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '2'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option A correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> In a velocity-time graph:
          <ul>
            <li>A positive, decreasing velocity means the particle is slowing down in the positive direction — displacement increases but at a decreasing rate (curves upwards and flattens).</li>
            <li>Constant velocity means linear displacement (straight line).</li>
            <li>Negative velocity means the particle moves in the opposite direction — displacement decreases.</li>
          </ul>
          Thus, the displacement-time graph should:
          <ul>
            <li>Curve upward initially (positive, decreasing velocity).</li>
            <li>Then become a straight line (constant positive velocity).</li>
            <li>Finally curve downward (negative velocity).</li>
          </ul>
          This matches the shape shown in Option A.
        </li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option B – Incorrect (No variation):</strong>
        <p>Shows no change in displacement when the particle is clearly moving.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Wrong curve shapes):</strong>
        <p>Shape is wrong for the sequence of positive to negative velocity.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Sudden jump, not smooth motion):</strong>
        <p>Displacement should vary smoothly, not with abrupt jumps.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Positive velocity means increasing displacement, negative velocity means decreasing displacement. The steeper the velocity, the steeper the displacement graph!
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '3'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option C correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> The problem gives the vertical and horizontal components of velocity, which are perpendicular to each other. The resultant velocity is found using the Pythagorean theorem:</li>
        <ul>
          <li>The magnitude of the resultant velocity \\( v \\) is given by: 
            \\[
            v = \\sqrt{v_{\\text{vertical}}^2 + v_{\\text{horizontal}}^2}
            \\]
            Substituting the values:
            \\[
            v = \\sqrt{5^2 + 8^2} = \\sqrt{25 + 64} = \\sqrt{89} 
            \\]
            Hence, the magnitude of the resultant velocity is \\( \\sqrt{8^2 + 5^2} \\), which matches Option C.
          </li>
        </ul>
        <li><strong>For the angle,</strong> we can use the tangent of the angle \\( \\theta \\) between the resultant velocity and the vertical component of the velocity:</li>
        <ul>
          <li>The angle \\( \\theta \\) is given by:
            \\[
            \\theta = \\tan^{-1} \\left( \\frac{v_{\\text{horizontal}}}{v_{\\text{vertical}}} \\right)
            \\]
            Substituting the values:
            \\[
            \\theta = \\tan^{-1} \\left( \\frac{8}{5} \\right)
            \\]
            Hence, the angle is \\( \\tan^{-1}(\\frac{8}{5}) \\), which matches Option C.
          </li>
        </ul>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Incorrect Formula for Magnitude):</strong>
        <p>This option incorrectly uses \\( \\sqrt{8^2 - 5^2} \\) for the magnitude, which is not applicable for finding the magnitude of the resultant velocity.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (Incorrect Formula for Angle):</strong>
        <p>This option incorrectly uses \\( \\sin^{-1} \\) instead of \\( \\tan^{-1} \\) for calculating the angle.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Incorrect Formula for Angle):</strong>
        <p>This option incorrectly uses \\( \\sin^{-1} \\) for calculating the angle, which is not the correct trigonometric function in this case.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> When dealing with perpendicular velocity components, always use the Pythagorean theorem to find the magnitude, and use \\( \\tan^{-1} \\) to find the angle.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '4'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option C correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> The formula for displacement \\( s \\) under constant acceleration from rest is:
          \\[
          s = \\frac{1}{2} a t^2
          \\]
          where:
          <ul>
            <li>\\( s \\) is the displacement (0.32 m),</li>
            <li>\\( a \\) is the acceleration due to gravity, and</li>
            <li>\\( t \\) is the time (0.63 s).</li>
          </ul>
        </li>
        <li>Rearranging the formula to solve for \\( a \\), we get:
          \\[
          a = \\frac{2s}{t^2}
          \\]
        </li>
        <li>Substituting the given values for displacement and time:
          \\[
          a = \\frac{2 \\times 0.32}{0.63^2}
          \\]
        </li>
        <li>Thus, Option C: \\( \\frac{2 \\times 0.32}{0.63^2} \\) is correct.</li>
      </ul>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Wrong Formula):</strong>
        <p>This option lacks \\( t^2 \\) in the denominator and is not correct.</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (Incorrect Denominator):</strong>
        <p>This option incorrectly uses \\( t^2 \\) in the denominator but fails to double the displacement.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Incorrect Formula):</strong>
        <p>This option uses the wrong formula and does not correctly account for the displacement's relationship with time squared.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Remember that the displacement due to constant acceleration from rest is proportional to the square of time, so always make sure to use the correct formula and units!
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '5'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option B correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> According to Stokes' law, the terminal velocity \\(v_t\\) of a small sphere falling through a viscous liquid is given by:
          \\[
          v_t = \\frac{2r^2 (\\rho - \\rho_l)g}{9\\eta}
          \\]
          where:
          <ul>
            <li>\\(r\\) is the radius of the sphere</li>
            <li>\\(\\rho\\) is the density of the sphere</li>
            <li>\\(\\rho_l\\) is the density of the liquid</li>
            <li>\\(g\\) is the acceleration due to gravity</li>
            <li>\\(\\eta\\) is the viscosity of the liquid</li>
          </ul>
          <br>
          If the viscosity \\(\\eta\\) increases, the terminal velocity \\(v_t\\) decreases for the same mass. 
          Therefore, the gradient of the terminal velocity vs mass graph would be smaller for a more viscous liquid.
        </li>
      </ul>
    </div>

    <div class="calculation">
      🧮 <strong>Calculation (Conceptual):</strong><br><br>
      Since \\( v_t \\propto \\frac{1}{\\eta} \\), an increase in \\(\\eta\\) reduces \\(v_t\\) for the same mass.<br>
      Hence, the slope (gradient) of the graph becomes smaller for a liquid of greater viscosity.
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Greater gradient):</strong>
        <p>Higher viscosity resists motion more, reducing terminal velocity, not increasing it.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Variable gradient):</strong>
        <p>The relationship remains linear; it does not become variable unless other factors like diameter change.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (Same gradient):</strong>
        <p>Viscosity directly affects terminal velocity, so the gradient cannot stay the same when viscosity changes.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Remember, terminal velocity decreases when the liquid becomes thicker (more viscous)!
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '6'
  },{
    mainAnswer : `
    <div class="explanation">
      <h3>✅ Why is Option B correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> According to Newton's Third Law of Motion, when one object exerts a force on a second object, the second object exerts an equal and opposite force on the first object. In this case:</li>
        <li>The person exerts a force \\( Q \\) on the trolley (action), and the trolley exerts an equal and opposite force \\( R \\) on the person (reaction). This pair of forces follows Newton's Third Law.</li>
        <li>These forces are equal in magnitude and opposite in direction, which makes \\( Q \\) and \\( R \\) a Newton's Third Law pair.</li>
      </ul>
    </div>

    <div class="calculation">
      🧮 <strong>Explanation for the Correct Pair:</strong><br><br>
      The force \\( Q \\) is exerted by the person on the trolley, and the force \\( R \\) is the reaction force exerted by the trolley on the person. By Newton's Third Law, these forces form a pair because they are equal in magnitude and opposite in direction.
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (Wrong Force Pair):</strong>
        <p>The force \\( P \\), exerted by the floor on the person, and \\( R \\), exerted by the trolley on the person, do not form a Newton's Third Law pair. They are forces from different interactions (floor-person and trolley-person) and not equal and opposite to each other.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect (Unrelated Forces):</strong>
        <p>The force \\( Q \\), exerted by the person on the trolley, and the drag force \\( S \\), do not form a Newton's Third Law pair. The drag force is an external force acting on the trolley, not a reaction to \\( Q \\).</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (No Third Law Pair):</strong>
        <p>The force \\( P \\), exerted by the floor on the person, and the drag force \\( S \\), do not form a Newton's Third Law pair. They act on different objects and are not related by action-reaction pairs.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Newton's Third Law pairs involve forces that act on two different objects and are equal in magnitude, opposite in direction, and occur due to the interaction between the objects.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '7'
  },{
    mainAnswer : `
    <div class="explanation">
      <h3>✅ Why is Option A correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> The force required to break a wire depends on the cross-sectional area of the wire. The tensile strength of the material is constant, so the force required to break the wire is directly proportional to the cross-sectional area, which is proportional to the square of the diameter.</li>
        <li>The formula for the tensile force required to break the wire is given by:</li>
        <ul>
          <li><strong>Force</strong> \\( F = \\sigma A \\), where \\( \\sigma \\) is the tensile strength and \\( A \\) is the cross-sectional area.</li>
        </ul>
        <li>The cross-sectional area of a wire is given by:</li>
        <ul>
          <li><strong>Area</strong> \\( A = \\pi d^2/4 \\), where \\( d \\) is the diameter of the wire.</li>
        </ul>
        <li>If the second wire has twice the diameter, its cross-sectional area will increase by a factor of four (since area is proportional to the square of the diameter). Therefore, the force required to break the second wire will be four times greater than the force required for the first wire.</li>
        <li>Thus, the force required to break the second wire is \\( 4T \\), which matches Option A.</li>
      </ul>
    </div>

    <div class="calculation">
      🧮 <strong>Calculation:</strong><br><br>
      Given:<br>
      Force required to break the first wire \\( T \\).<br>
      Diameter of the second wire is twice that of the first wire.<br><br>
      
      The force required to break the second wire is given by:<br>
      \\[
      F_{\\text{second}} = 4T
      \\]
      Thus, the force required is four times the force required for the first wire.
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option B – Incorrect:</strong>
        <p>This option suggests a linear relationship between force and diameter, which is incorrect. The force required is proportional to the area, which depends on the square of the diameter.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect:</strong>
        <p>This option incorrectly suggests a relationship that does not account for the square of the diameter.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect:</strong>
        <p>This option suggests a force smaller than that required for the first wire, which is incorrect as the second wire has a larger cross-sectional area.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> When dealing with the tensile force of a wire, remember that the force required to break the wire is proportional to the cross-sectional area, which depends on the square of the wire's diameter.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '8'
  },{
    mainAnswer : `
        <div class="explanation">
      <h3>✅ Why is Option C correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> For the beam to be in equilibrium:
          <ul>
            <li>The sum of the upward forces must equal the downward force (weight).</li>
            <li>The sum of the clockwise moments must equal the sum of the anticlockwise moments.</li>
          </ul>
          Therefore, we have:
          \\[
          P + Q = W
          \\]
          Taking moments about the left support (where \\(P\\) acts):
          \\[
          Q \\times \\text{distance between supports} = W \\times \\text{distance of W from P}
          \\]
          Since \\(W\\) is closer to \\(P\\) than to \\(Q\\), \\(Q\\) must be larger than \\(P\\) to balance the moments.
          Thus:
          \\[
          Q > P
          \\]
        </li>
      </ul>
    </div>


    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect (\\(P > Q\\)):</strong>
        <p>If \\(P\\) were greater than \\(Q\\), the moments would not balance because \\(W\\) is closer to \\(P\\).</p>
      </div>
      <div>
        <strong>❌ Option B – Incorrect (\\(Q > W\\)):</strong>
        <p>\\(Q\\) alone cannot be greater than \\(W\\) because \\(P + Q = W\\); otherwise, the net upward force would be greater than \\(W\\).</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect (\\((P + Q) > W\\)):</strong>
        <p>In equilibrium, \\(P + Q\\) must equal \\(W\\), not be greater than \\(W\\).</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Always apply both the conditions for equilibrium: (1) force balance and (2) moment balance!
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '9'
  },{
    mainAnswer : `
    <div class="explanation">
      <h3>✅ Why is Option B correct?</h3>
      <ul>
        <li><strong>Explanation:</strong> Let's break down each pair of units to identify if they are equivalent or not.</li>
        <li><strong>Option A: Unit 1: Js⁻¹; Unit 2: W</strong></li>
        <ul>
          <li>The unit \\( \\text{Js}^{-1} \\) (joule-seconds inverse) represents power, which is equivalent to the unit \\( \\text{W} \\) (watts). These units are equivalent.</li>
        </ul>
        <li><strong>Option B: Unit 1: kgms⁻²; Unit 2: Ns</strong></li>
        <ul>
          <li>The unit \\( \\text{kgms}^{-2} \\) (kilogram meter per second squared) represents force (newton), while \\( \\text{Ns} \\) (newton-second) represents momentum. These are different physical quantities, so they are not equivalent.</li>
        </ul>
        <li><strong>Option C: Unit 1: Nkg⁻¹; Unit 2: ms⁻²</strong></li>
        <ul>
          <li>The unit \\( \\text{Nkg}^{-1} \\) (newton per kilogram) represents gravitational field strength, which has the same units as \\( \\text{ms}^{-2} \\) (meters per second squared), which represents acceleration. These units are equivalent.</li>
        </ul>
        <li><strong>Option D: Unit 1: Nm; Unit 2: J</strong></li>
        <ul>
          <li>The unit \\( \\text{Nm} \\) (newton meter) is equivalent to the unit \\( \\text{J} \\) (joule), both representing energy or work. These units are equivalent.</li>
        </ul>
      </ul>
      <p>Thus, Option B is the correct answer, as the units \\( \\text{kgms}^{-2} \\) and \\( \\text{Ns} \\) are not equivalent.</p>
    </div>

    <div class="other-options">
      <div>
        <strong>❌ Option A – Incorrect:</strong>
        <p>Both \\( \\text{Js}^{-1} \\) and \\( \\text{W} \\) are equivalent as they represent power.</p>
      </div>
      <div>
        <strong>✅ Option B – Correct:</strong>
        <p>\\( \\text{kgms}^{-2} \\) and \\( \\text{Ns} \\) are not equivalent because one represents force and the other represents momentum.</p>
      </div>
      <div>
        <strong>❌ Option C – Incorrect:</strong>
        <p>Both \\( \\text{Nkg}^{-1} \\) and \\( \\text{ms}^{-2} \\) are equivalent as they represent acceleration or gravitational field strength.</p>
      </div>
      <div>
        <strong>❌ Option D – Incorrect:</strong>
        <p>Both \\( \\text{Nm} \\) and \\( \\text{J} \\) are equivalent as they represent energy or work.</p>
      </div>
    </div>

    <div class="tip-box">
      💡 <strong>Tip:</strong> Make sure to distinguish between force and momentum. They have different physical meanings and are not interchangeable.
    </div>
    `,
    videoLink : '#',
    practiceLink: '#',
    answerID : '10'
  }  
]
}